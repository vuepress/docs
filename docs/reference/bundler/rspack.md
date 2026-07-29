# Rspack

<NpmBadge package="@vuepress/bundler-rspack" />

Rspack bundler is provided by [@vuepress/bundler-rspack](https://www.npmjs.com/package/@vuepress/bundler-rspack) package.

[Rspack](https://rspack.dev/) is a high-performance JavaScript bundler written in Rust, with almost full compatibility with Webpack. It offers a significantly faster build speed while supporting most Webpack configurations and loaders out of the box.

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

## Options

Since Rspack is designed to be highly compatible with Webpack, the bundler options are very similar to [Webpack](./webpack.md). The following options are available:

### configureRspack

- Type: `(config: RspackConfiguration, isServer: boolean, isBuild: boolean) => RspackConfiguration | void`

- Details:

  Edit the internal rspack config.

  This option accepts a function that will receive a rspack config object as the 1st argument, an `isServer` flag as the 2nd argument and an `isBuild` flag as the 3rd argument. You can either mutate the config directly, or return an object to be merged by [rspack-merge](https://github.com/rstackjs/rspack-merge).

### chainRspack

- Type: `(config: RspackChain, isServer: boolean, isBuild: boolean) => void`

- Details:

  Edit the internal rspack config with [rspack-chain](https://github.com/rstackjs/rspack-chain).

  This option accepts a function that will receive a `RspackChain` instance as the 1st argument, an `isServer` flag as the 2nd argument and an `isBuild` flag as the 3rd argument.

### devServerSetupMiddlewares

- Type: `(middlewares: Middleware[], devServer: Server) => Middleware[]`

- Details:

  A hook to be called in `devServer.setupMiddlewares` of rspack.

  The arguments of the function are those of `devServer.setupMiddlewares`.

- Also see:
  - [Rspack > Configuration > DevServer > devServer.setupMiddlewares](https://rspack.dev/guide/dev-server)

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

### Why Rspack?

Rspack offers almost full compatibility with Webpack while being significantly faster due to its Rust-based implementation. If you are currently using Webpack but want better performance without rewriting your existing Webpack configurations, Rspack is an excellent choice.

### Referencing Public Files after Changing `base`

Like Webpack, Rspack won't handle `base` for public files automatically. So if you change the `base` of your site, you'd better to use [Base Helper](../../guide/assets.md#base-helper) when referencing an public image file.

### Using with Default Theme

Default theme is using [SASS](https://sass-lang.com/) as CSS pre-processor, so you might need to install [sass-loader](https://www.npmjs.com/package/sass-loader) as a peer dependency to make it work with Rspack, especially when you are using [pnpm](https://pnpm.io/).
