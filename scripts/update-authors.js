const { join } = require('path')
const { CWD, run, git, fs } = require('./util.js')

const AUTHORS = join(CWD, 'AUTHORS')

const main = async () => {
  const allAuthors = await git('log', '--use-mailmap', '--reverse', '--format=%aN <%aE>', {
    out: true,
  })

  const authors = new Set()
  for (const author of allAuthors.split('\n')) {
    if (
      !author.includes('[bot]') &&
      !author.startsWith('npm team') &&
      !author.startsWith('npm CLI robot')
    ) {
      authors.add(author)
    }
  }

  return fs.writeFile(AUTHORS, [
    `# Authors sorted by whether or not they're me`,
    ...authors,
  ].join('\n'))
}

run(main)
