# Webpack

<NpmBadge package="@vuepress/bundler-webpack" />

Webpack bundler is provided by [@vuepress/bundler-webpack](https://www.npmjs.com/package/@vuepress/bundler-webpack) package.

## Usage

Install the bundler package:

```bash
npm i -D @vuepress/bundler-webpack@next
```

Specify the bundler option in your config file:

```ts title=".vuepress/config.ts"
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
})
```

## Exports

### webpackBundler

- Type: `(options?: WebpackBundlerOptions) => Bundler`

- Details:

  Create a webpack bundler instance.

### webpackMergeConfig

- Type: `(configA: WebpackConfiguration, configB: WebpackConfiguration) => WebpackConfiguration`

- Details:

  Merge two webpack config objects, provided by [webpack-merge](https://github.com/survivejs/webpack-merge).

### Exported types

The package re-exports the types of its options and the underlying tools:

- `WebpackBundlerOptions`
- `WebpackConfiguration` (from `webpack`)
- `WebpackChainConfig` (from `webpack-v5-chain`)
- `WebpackDevServerConfiguration` (from `webpack-dev-server`)
- `VueLoaderOptions`, `PostcssLoaderOptions`, `StylusLoaderOptions`, `SassLoaderOptions`, `LessLoaderOptions`

::: tip
In webpack-dev-server v6, the configuration type is no longer exposed through the `WebpackDevServer.Configuration` namespace. `@vuepress/bundler-webpack` now re-exports it as the named `WebpackDevServerConfiguration` type (the `WebpackDevServer` type is still exported as well), and `devServerSetupMiddlewares` uses `WebpackDevServerConfiguration`.
:::

## Options

### configureWebpack

- Type: `(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) => WebpackConfiguration | void`

- Details:

  Edit the internal webpack config.

  This option accepts a function that will receive a webpack config object as the 1st argument, an `isServer` flag as the 2nd argument and an `isBuild` flag as the 3rd argument. You can either mutate the config directly, or return an object to replace the webpack config object.

  If you need to merge configs instead of replacing them, use [webpackMergeConfig](#webpackmergeconfig).

### chainWebpack

- Type: `(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void`

- Details:

  Edit the internal webpack config with [webpack-v5-chain](https://github.com/Mister-Hope/webpack-v5-chain).

  This option accepts a function that will receive a `Config` instance that provided by `webpack-v5-chain` as the 1st argument an `isServer` flag as the 2nd argument and an `isBuild` flag as the 3rd argument.

### devServerSetupMiddlewares

- Type: `WebpackDevServerConfiguration['setupMiddlewares']`

- Details:

  A hook to be called in `devServer.setupMiddlewares` of [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server).

  The arguments of the function are those of `devServer.setupMiddlewares`. The `WebpackDevServerConfiguration` type is re-exported by `@vuepress/bundler-webpack`.

- Also see:
  - [Webpack > Configuration > DevServer > devServer.setupMiddlewares](https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares)

### vue

- Type: `VueLoaderOptions`

- Details:

  Options for `vue-loader`.

- Also see:
  - [vue-loader > Options Reference](https://vue-loader.vuejs.org/options.html)

### postcss

- Type: `PostcssLoaderOptions`

- Details:

  Options for `postcss-loader`.

- Also see:
  - [postcss-loader > Options](https://github.com/webpack-contrib/postcss-loader#options)

### stylus

- Type: `StylusLoaderOptions`

- Details:

  Options for `stylus-loader`.

- Also see:
  - [stylus-loader > Options](https://github.com/webpack-contrib/stylus-loader#options)

### scss

- Type: `SassLoaderOptions`

- Details:

  Options for `sass-loader` for `.scss` files.

- Also see:
  - [sass-loader > Options](https://github.com/webpack-contrib/sass-loader#options)

### sass

- Type: `SassLoaderOptions`

- Details:

  Options for `sass-loader` for `.sass` files.

- Also see:
  - [sass-loader > Options](https://github.com/webpack-contrib/sass-loader#options)

### less

- Type: `LessLoaderOptions`

- Details:

  Options for `less-loader`.

- Also see:
  - [less-loader > Options](https://github.com/webpack-contrib/less-loader#options)

### evergreen

- Type: `boolean`

- Default: `true`

- Details:

  Set to `true` if you are only targeting evergreen browsers. This will disable some transpilation and polyfills, and result in faster builds and smaller files.

## FAQ

### Referencing Public Files after Changing `base`

VuePress prepends `base` to absolute asset paths in Markdown automatically when using the Webpack and Rspack bundlers, so public files referenced from Markdown keep working after you change the `base` of your site. If you create URLs at runtime (for example, in a Vue component), use [Base Helper](../../guide/assets.md#base-helper).

### Using with SASS-based Themes

The default theme uses plain CSS, so it does not require any SASS setup. If you use a theme that relies on [SASS](https://sass-lang.com/) as CSS pre-processor — for example, the classic theme (`@vuepress/theme-classic`) — you might need to install [sass-loader](https://www.npmjs.com/package/sass-loader) as a peer dependency to make it work with Webpack (and Rspack), especially when you are using [pnpm](https://pnpm.io/).
