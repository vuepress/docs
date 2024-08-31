import { createRequire } from 'node:module'
import { fs } from 'vuepress/utils'

const require = createRequire(import.meta.url)

export const VERSION = (
  fs.readJsonSync(require.resolve('vuepress/package.json')) as {
    version: string
  }
).version
