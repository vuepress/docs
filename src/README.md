---
home: true
title: Home
icon: fa6-solid:house
heroImage: /images/hero.png
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
  - text: Marketplace
    link: https://marketplace.vuejs.press/
    type: secondary
features:
  - title: Simplicity First
    icon: fa6-solid:star
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    icon: fa6-brands:vuejs
    details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    icon: fa6-solid:bolt
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
  - title: Themes
    icon: fa6-solid:palette
    details: Providing a default theme out of the box. You can also choose a community theme or create your own one.
  - title: Plugins
    icon: fa6-solid:plug
    details: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.
  - title: Bundlers
    icon: fa6-solid:boxes-packing
    details: Default bundler is Vite, while Webpack is also supported. Choose the one you like!
---

### As Easy as 1, 2, 3

::: code-tabs#shell

@tab:active PNPM

```bash
# install in your project
pnpm add -D vuepress@next @vuepress/client@next vue

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
pnpm vuepress dev

# build to static files
pnpm vuepress build
```

@tab YARN

```bash
# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```

@tab NPM

```bash
# install in your project
npm install -D vuepress@next

# create a markdown file

echo '# Hello VuePress' > README.md

# start writing

npx vuepress dev

# build to static files

npx vuepress build

```

:::
