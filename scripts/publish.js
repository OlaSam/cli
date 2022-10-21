const semver = require('semver')
const log = require('proc-log')
const pacote = require('pacote')
const { run, git, npm, pkg: cli, spawn } = require('./util.js')

const resetdeps = () => npm('run', 'resetdeps')

const op = () => spawn('op', 'item', 'get', 'npm', '--otp', { out: true, ok: true })

const needsPublish = async ({ force, pkg, preTag, tag }) => {
  if (pkg.private) {
    return
  }

  if (preTag && semver.parse(pkg.version).prerelease.length) {
    tag = preTag
  }

  if (!force) {
    const mani = await pacote.manifest(`${pkg.name}@${tag}`, { preferOnline: true })
    if (pkg.version === mani.version) {
      return
    }
  }

  return tag
}

const getPublishes = async (force) => {
  const publish = []

  for (const { name, pkg } of await cli.mapWorkspaces()) {
    publish.push({
      workspace: name,
      tag: await needsPublish({
        force,
        pkg,
        preTag: 'prerelease',
        tag: 'latest',
      }),
    })
  }

  publish.push({
    tag: await needsPublish({
      force,
      pkg: cli,
      tag: `next-${semver.major(cli.version)}`,
    }),
  })

  return publish.filter(p => p.tag)
}

const main = async (opts) => {
  const publishes = await getPublishes(opts.pack)

  if (!publishes.length) {
    throw new Error(
      'Nothing to publish, exiting. ' +
      'All packages to publish should have their version bumped before running this script.'
    )
  }

  log.info('publish', '\n' + publishes.map(JSON.stringify).join('\n'))

  await git('clean', '-fd')
  await resetdeps()
  await npm('ls', '--omit=dev', { quiet: true })
  await npm('rm', '--global', '--force', 'npm')
  await npm('link', '--force', '--ignore-scripts')

  if (opts.test) {
    await npm('run', 'lint-all', '--ignore-scripts')
    await npm('run', 'postlint', '--ignore-scripts')
    await npm('run', 'test-all', '--ignore-scripts')
  }

  await npm('prune', '--omit-dev', '--no-save', '--no-audit', '--no-fund')
  await git.dirty()

  for (const p of publishes) {
    const workspace = p.workspace && `--workspace=${p.workspace}`
    if (opts.pack) {
      await npm('pack',
        workspace,
        opts.packDestination && `--pack-destination=${opts.packDestination}`
      )
    } else {
      await npm('publish',
        workspace,
        `--tag=${p.tag}`,
        opts.dryRun && '--dry-run',
        opts.otp && `--otp=${opts.otp === 'op' ? await op() : opts.otp}`
      )
    }
  }
}

run(main).catch(resetdeps)
