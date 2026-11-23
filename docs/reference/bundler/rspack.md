# Rspack

<NpmBadge package="@vuepress/bundler-rspack" />

Rspack bundler is provided by [@vuepress/bundler-rspack](https://www.npmjs.com/package/@vuepress/bundler-rspack) package.

## Usage

Install the bundler package:

```bash
npm i -D @vuepress/bundler-rspack@next
```

Specify the bundler option in your config file:

```ts title=".vuepress/config.ts"
import { rspackBundler } from '@vuepress/bundler-rspack'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: rspackBundler({
    postcss: {},
    vue: {},
  }),
})
```

::: tip
There is no `vuepress-rspack` CLI shorthand. Unlike the `vuepress-vite` and `vuepress-webpack` commands, you always need to select the bundler with `bundler: rspackBundler()` in your config file.
:::

## Exports

### rspackBundler

- Type: `(options?: RspackBundlerOptions) => Bundler`

- Details:

  Create a rspack bundler instance.

### rspackMergeConfig

- Type: `(configA: RspackConfiguration, configB: RspackConfiguration) => RspackConfiguration`

- Details:

  Merge two rspack config objects, provided by [rspack-merge](https://github.com/rstackjs/rspack-merge).

### Exported types

The package re-exports the types of its options and the underlying tools:

- `RspackBundlerOptions`
- `RspackConfiguration` (from `@rspack/core`)
- `RspackDevServer` (from `@rspack/dev-server`)
- `VueLoaderOptions`, `PostcssLoaderOptions`, `StylusLoaderOptions`, `SassLoaderOptions`, `LessLoaderOptions`

## Options

### configureRspack

- Type: `(config: RspackConfiguration, isServer: boolean, isBuild: boolean) => RspackConfiguration | void`

- Details:

  Edit the internal rspack config.

  This option accepts a function that will receive a rspack config object as the 1st argument, an `isServer` flag as the 2nd argument and an `isBuild` flag as the 3rd argument. You can either mutate the config directly, or return an object to replace the rspack config object.

### chainRspack

- Type: `(config: RspackChain, isServer: boolean, isBuild: boolean) => void`

- Details:

  Edit the internal rspack config with [rspack-chain](https://github.com/rstackjs/rspack-chain).

  This option accepts a function that will receive a `Config` instance that provided by `rspack-chain` as the 1st argument, an `isServer` flag as the 2nd argument and an `isBuild` flag as the 3rd argument.

### devServerSetupMiddlewares

- Type: `RspackDevServerConfiguration['setupMiddlewares']`

- Details:

  A hook to be called in `devServer.setupMiddlewares` of [@rspack/dev-server](https://www.npmjs.com/package/@rspack/dev-server).

  The arguments of the function are those of `devServer.setupMiddlewares`. You can import the `RspackDevServerConfiguration` type from `@rspack/dev-server` if you need to type the hook yourself.

- Also see:
  - [Rspack > Configuration > DevServer](https://rspack.dev/config/dev-server)

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

### Using with SASS-based Themes

The default theme uses plain CSS, so it does not require any SASS setup. If you use a theme that relies on [SASS](https://sass-lang.com/) as CSS pre-processor — for example, the classic theme (`@vuepress/theme-classic`) — you might need to install [sass-loader](https://www.npmjs.com/package/sass-loader) as a peer dependency to make it work with Webpack (and Rspack), especially when you are using [pnpm](https://pnpm.io/).
