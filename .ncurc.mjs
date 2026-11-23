const coolDownExcludePrefixes = [
  '@mdit/',
  '@mr-hope/',
  '@oxfmt/',
  '@oxlint/',
  '@vue/',
  '@vuepress/',
]
const coolDownExcludePackages = new Set([
  'oxc-config-hope',
  'oxfmt',
  'oxlint',
  'vue',
  'vuepress',
])

export default {
  peer: true,
  cooldown: (pkg) => {
    if (
      coolDownExcludePrefixes.some((prefix) => pkg.startsWith(prefix)) ||
      coolDownExcludePackages.has(pkg)
    )
      return 0

    return 1
  },
  upgrade: true,
  timeout: 300000,
  target: (name) => {
    if (
      name.startsWith('@vuepress/') ||
      name === 'vuepress' ||
      name.startsWith('vuepress-')
    )
      return '@next'

    if (['@types/node', 'domhandler', 'typescript'].includes(name))
      return 'minor'

    if (['vite'].includes(name)) return 'patch'

    return 'latest'
  },
}
