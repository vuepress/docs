import { sidebar } from 'vuepress-theme-hope'

export const SIDEBAR_EN = sidebar({
  '/guide/': [
    'introduction',
    'getting-started',
    'configuration',
    'page',
    'markdown',
    'assets',
    'i18n',
    'deployment',
    'theme',
    'plugin',
    'bundler',
    'migration',
    'troubleshooting',
  ],
  '/advanced/': [
    {
      text: 'Advanced',
      icon: 'fa6-solid:gem',
      children: ['architecture', 'plugin', 'theme'],
    },
    {
      text: 'Cookbook',
      icon: 'fa6-solid:signs-post',
      prefix: 'cookbook/',
      children: [
        '',
        'usage-of-client-config',
        'adding-extra-pages',
        'making-a-theme-extendable',
        'passing-data-to-client-code',
        'markdown-and-vue-sfc',
        'resolving-routes',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Core',
      icon: 'fa6-brands:vuejs',
      collapsible: true,
      children: [
        'cli',
        'config',
        'frontmatter',
        'components',
        'plugin-api',
        'theme-api',
        'client-api',
        'node-api',
      ],
    },
    {
      text: 'Bundlers',
      icon: 'fa6-solid:boxes-packing',
      prefix: 'bundler/',
      collapsible: true,
      children: ['vite', 'webpack'],
    },
    {
      text: 'Ecosystem',
      icon: 'fa6-solid:leaf',
      children: [
        {
          text: 'Default Theme',
          icon: 'fa6-solid:palette',
          link: 'https://ecosystem.vuejs.press/themes/default/',
        },
        {
          text: 'Plugins',
          icon: 'fa6-solid:puzzle-piece',
          link: 'https://ecosystem.vuejs.press/plugins/',
        },
        {
          text: 'MarketPlace',
          icon: 'fa6-solid:cart-shopping',
          link: 'https://marketplace.vuejs.press',
        },
      ],
    },
  ],
})
