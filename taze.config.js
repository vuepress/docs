import { defineConfig } from 'taze'

export default defineConfig({
  includeLocked: true,
  packageMode: {
    '@vuepress/*': 'next',
    'vuepress': 'next',
  },
  recursive: true,
  write: true,
})
