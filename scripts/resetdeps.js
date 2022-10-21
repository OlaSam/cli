
const { join } = require('path')
const { CWD, run, pkg, fs, git, npm } = require('./util.js')

const checkout = () => git('checkout', 'node_modules/')

const main = async (installArgs) => {
  await fs.rimraf(join(CWD, 'node_modules'))
  for (const { path } of await pkg.mapWorkspaces()) {
    await fs.rimraf(join(path, 'node_modules'))
  }

  await checkout()
  await npm('install', '--ignore-scripts', '--no-audit', '--no-fund', ...installArgs)
  await npm('rebuild', '--ignore-scripts')
  await npm('run', 'dependencies', '--ignore-scripts')
}

run(({argv}) => main(argv.original)).catch(checkout)
