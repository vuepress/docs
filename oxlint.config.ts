import { defineHopeConfig } from 'oxc-config-hope/oxlint'

export default defineHopeConfig({
  ignore: [
    'docs/.vuepress/.cache/**',
    'docs/.vuepress/.temp/**',
    'docs/.vuepress/dist/**',
  ],

  node: ['docs/.vuepress/**/*.ts', 'scripts/**/*.ts', '*.config.ts'],
  vue: true,

  options: {
    typeAware: true,
    typeCheck: false,
  },

  rules: {
    // we use warning comments like todo, fixme
    'no-warning-comments': 'off',
  },
})
