const fsp = require('fs/promises')
const { resolve, join, relative } = require('path')
const { formatWithOptions } = require('util')
const log = require('proc-log')
const nopt = require('nopt')
const npmGit = require('@npmcli/git')
const promiseSpawn = require('@npmcli/promise-spawn')
const mapWorkspaces = require('@npmcli/map-workspaces')

const CWD = resolve(__dirname, '..')

const pkg = require(join(CWD, 'package.json'))
pkg.mapWorkspaces = async () => {
  const ws = []
  for (const [name, path] of await mapWorkspaces({ pkg })) {
    ws.push({ name, path, pkg: require(join(path, 'package.json')) })
  }
  return ws
}

const fs = {
  rimraf: (p) => fsp.rm(p, { recursive: true, force: true }),
  mkdirp: (p) => fsp.mkdir(p, { recursive: true }),
  clean: (p) => fs.rimraf(p).then(() => fs.mkdirp(p)),
  rmAll: (p) => Promise.all(p.map(fs.rimraf)),
  writeFile: async (p, d) => {
    await fsp.writeFile(p, d.trim() + '\n', 'utf-8')
    return `Wrote to ${relative(CWD, p)}`
  },
}

// for spawn, allow a flat array of arguments where the
// the last arg can optionall be an options object
const getArgs = (allArgs) => {
  let args = allArgs.flat().filter(Boolean)
  let opts = {}

  const last = args[args.length - 1]
  if (typeof last === 'object') {
    args = args.slice(0, -1)
    opts = last
  }

  return { args, opts }
}

const spawn = async (cmd, ...allArgs) => {
  const {
    args,
    opts: { ok, input, out, quiet, ...opts },
  } = getArgs(allArgs)

  log.info('spawn', `${cmd} ${args.join(' ')}`)

  let res = null
  try {
    const spawnOpts = {
      stdioString: true,
      stdio: quiet || out ? 'pipe' : 'inherit',
      cwd: CWD,
      ...opts,
    }
    const proc = cmd === 'git' ? npmGit.spawn(args, spawnOpts) : promiseSpawn(cmd, args, spawnOpts)
    if (input) {
      proc.stdin.write(input)
      proc.stdin.end()
    }
    res = await proc
  } catch (err) {
    if (!ok) {
      throw err
    }
    log.info('suppressed error', err)
  }

  if (typeof res?.stdout === 'string') {
    res.stdout = res.stdout.trim()
    if (res.stdout) {
      log.silly('stdout', res.stdout)
    }
  }

  if (typeof res?.stderr === 'string') {
    res.stderr = res.stderr.trim()
    if (res.stderr) {
      log.silly('stderr', res.stderr)
    }
  }

  return out ? res?.stdout : res
}

// allows for creating spawn functions with a prefilled
// command and checking if the last arg is an options obj
spawn.create = (cmd, ...prefillArgs) => (...cmdArgs) => {
  const prefill = getArgs(prefillArgs)
  const command = getArgs(cmdArgs)
  return spawn(
    cmd,
    [...prefill.args, ...command.args],
    { ...prefill.opts, ...command.opts }
  )
}

const npm = spawn.create('node', '.')
npm.query = (...args) => npm('query', ...args, { out: true }).then(JSON.parse)
npm.setFiles = (f = []) =>
  npm('pkg', 'set', `files=${JSON.stringify([...pkg.files, ...f])}`, '--json', { quiet: true })

const git = spawn.create('git')
for (const gitKey of Object.keys(npmGit)) {
  if (typeof npmGit[gitKey] === 'function' && gitKey !== 'spawn') {
    git[gitKey] = (...a) => {
      const { args, opts } = getArgs(a)
      return npmGit[gitKey](...args, { ...opts, cwd: CWD })
    }
  }
}
git.dirty = () => {
  if (git.isClean()) {
    return 'git clean'
  }
  throw new Error('git dirty')
}

const gh = spawn.create('gh')
gh.json = async (...args) => {
  const keys = args.pop()
  let data = await gh(...args, '--json', keys, { out: true }).then(JSON.parse)
  if (keys.split(',').length === 1) {
    data = data[keys]
  }
  return data
}

const run = async (main) => {
  const argv = {}
  for (const [k, v] of Object.entries(nopt({}, {}, process.argv))) {
    argv[k] = v
    // create camelcase key too
    argv[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = v
  }

  process.on('log', (l, ...args) => {
    if (argv.debug || l !== 'silly') {
      for (const line of formatWithOptions({ colors: true }, ...args).split('\n')) {
        console.error(l.slice(0, 4).toUpperCase(), line)
      }
    }
  })

  log.silly('argv', argv)

  try {
    const res = await main(argv)
    if (res) {
      console.log(res)
    }
  } catch (err) {
    process.exitCode = err.status || 1

    const messages = []
    if (err.args) {
      // its an error from promise-spawn
      for (const [name, value] of Object.entries(err)) {
        if (value) {
          let msg = Array.isArray(value) ? value.join(' ') : value.toString()
          let sep = ' '
          if (msg.includes('\n')) {
            msg = '  ' + msg.split('\n').map(l => l.trim()).join('\n  ').trim()
            sep = '\n'
          }
          messages.push(`${name}:${sep}${msg}`)
        }
        // delete from error object so we can log them separately
        delete err[name]
      }
    }

    log.error(err)
    if (messages.length) {
      log.error(messages.join('\n'))
    }
  }
}

module.exports = {
  CWD,
  pkg,
  run,
  fs,
  spawn,
  gh,
  npm,
  git,
}
