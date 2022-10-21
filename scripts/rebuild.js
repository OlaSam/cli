const { join } = require('path')
const glob = require('glob')
const { npm, run, log } = require('./util')

const main = async (pkgNames) => {
  for (const name of pkgNames) {
    const { path } = await npm.query(`#${name}`).then(r => r[0])
    const binding = await glob(join(path, '**', 'binding.node'))
    if (!binding.length) {
      await npm('rebuild', name)
    } else {
      log.info(`skipping ${name}, already built`)
    }
  }
}

run(({ argv }) => main(argv.original))
