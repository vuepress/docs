# Bundler

VuePress supports using [Webpack](https://webpack.js.org/) or [Vite](https://vite.dev/) to dev and build sites. You can choose which bundler to use according to your preference, and no extra configuration is required.

## Install a Bundler

When installing the [vuepress](https://www.npmjs.com/package/vuepress) package, no bundlers will be installed. You need to choose a bundler to install.

::: code-tabs#shell

@tab pnpm

```bash
# install vite bundler
pnpm add -D vuepress@next @vuepress/bundler-vite@next
# install webpack bundler
pnpm add -D vuepress@next @vuepress/bundler-webpack@next
```

@tab yarn

```bash
# install vite bundler
yarn add -D vuepress@next @vuepress/bundler-vite@next
# install webpack bundler
yarn add -D vuepress@next @vuepress/bundler-webpack@next
```

@tab npm

```bash
# install vite bundler
npm install -D vuepress@next @vuepress/bundler-vite@next
# install webpack bundler
npm install -D vuepress@next @vuepress/bundler-webpack@next
```

:::

## Use a Bundler

Generally, you could use a bundler without extra configuration, because we have already configured them properly to work with VuePress.

You can use a bundler via the [bundler](../reference/config.md#bundler) option:

```ts
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'

export default {
  bundler: viteBundler(),
  // bundler: webpackBundler(),
}
```

When you need to customize the bundler, you can set the corresponding options:

- [Bundlers > Vite](../reference/bundler/vite.md)
- [Bundlers > Webpack](../reference/bundler/webpack.md)
