import { vuepress } from 'eslint-config-vuepress'

export default vuepress({
  vue: {
    overrides: {
      'no-useless-assignment': 'off', // TODO: false positive in vue sfc
    },
  },
})
