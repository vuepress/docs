import { vuepress } from 'eslint-config-vuepress'

export default vuepress({
  ignores: [
    // the intended js parsing error could not be disabled, so we have to ignore them
    'docs/guide/markdown.md',
    'docs/zh/guide/markdown.md',
  ],
  vue: {
    overrides: {
      'no-useless-assignment': 'off', // TODO: false positive in vue sfc
    },
  },
})
