# Bundler

VuePress supports using [Webpack](https://webpack.js.org/), [Vite](https://vite.dev/) or [Rspack](https://rspack.dev/) to dev and build sites. You can choose which bundler to use according to your preference, and no extra configuration is required.

## Install a Bundler

When installing the [vuepress](https://www.npmjs.com/package/vuepress) package, no bundlers will be installed. You need to choose a bundler to install.

::: code-tabs#shell

@tab pnpm

```bash
# install vite bundler
pnpm add -D vuepress@next @vuepress/bundler-vite@next
# install webpack bundler
pnpm add -D vuepress@next @vuepress/bundler-webpack@next
# install rspack bundler
pnpm add -D vuepress@next @vuepress/bundler-rspack@next
```

@tab yarn

```bash
# install vite bundler
yarn add -D vuepress@next @vuepress/bundler-vite@next
# install webpack bundler
yarn add -D vuepress@next @vuepress/bundler-webpack@next
# install rspack bundler
yarn add -D vuepress@next @vuepress/bundler-rspack@next
```

@tab npm

```bash
# install vite bundler
npm install -D vuepress@next @vuepress/bundler-vite@next
# install webpack bundler
npm install -D vuepress@next @vuepress/bundler-webpack@next
# install rspack bundler
npm install -D vuepress@next @vuepress/bundler-rspack@next
```

:::

## Use a Bundler

Generally, you could use a bundler without extra configuration, because we have already configured them properly to work with VuePress.

You can use a bundler via the [bundler](../reference/config.md#bundler) option:

```ts
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
// import { rspackBundler } from '@vuepress/bundler-rspack'

export default {
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  // bundler: rspackBundler(),
}
```

When you need to customize the bundler, you can set the corresponding options:

- [Bundlers > Vite](../reference/bundler/vite.md)
- [Bundlers > Webpack](../reference/bundler/webpack.md)
- [Bundlers > Rspack](../reference/bundler/rspack.md)

## Custom Bundlers

A bundler is an object that implements the `Bundler` interface from `@vuepress/core`:

```ts
import type { App, DeepPartial } from '@vuepress/core'

interface Bundler {
  name: string
  type: string
  dev: (app: App) => Promise<() => Promise<void>>
  build: (app: App) => Promise<void>
  mergeConfig: <
    Config extends Record<string, unknown> = Record<string, unknown>,
  >(
    currentConfig: Config,
    newConfig: DeepPartial<Config>,
  ) => Config
}
```

- `name`: unique package name of the bundler, e.g. `'@vuepress/bundler-vite'`.
- `type`: bundler type used by plugins for stable checks, e.g. `'vite'`, `'webpack'` or `'rspack'`.
- `dev`: starts the dev server for an app, and returns a function to close it.
- `build`: builds the site of an app.
- `mergeConfig`: merges a partial config into the current config object. It is a required member since v2.0.0-rc.32, and is also exposed as `app.options.bundler.mergeConfig`.

The options of a bundler are passed through the [bundler](../reference/config.md#bundler) option and typed by `BundlerOptions` (`Record<string, unknown>`). Plugins and themes can extend them with the [extendsBundlerOptions](../reference/plugin-api.md#extendsbundleroptions) hook.

A minimal skeleton of a custom bundler:

```ts
import type { Bundler, BundlerOptions } from '@vuepress/core'

export interface MyBundlerOptions extends BundlerOptions {
  // ...your own options
}

export const myBundler = (options: MyBundlerOptions = {}): Bundler => ({
  name: '@example/bundler-my',
  type: 'my-bundler',
  async dev(app) {
    // start a dev server for `app`, then return a close function
    return async () => {
      // stop the dev server
    }
  },
  async build(app) {
    // build the site of `app`
  },
  mergeConfig(currentConfig, newConfig) {
    // deep-merge with a helper of your bundler, e.g. webpack-merge
    return { ...currentConfig, ...newConfig } as typeof currentConfig
  },
})
```
