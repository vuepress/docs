# Vite

<NpmBadge package="@vuepress/bundler-vite" />

Vite bundler is provided by [@vuepress/bundler-vite](https://www.npmjs.com/package/@vuepress/bundler-vite) package.

## Usage

Install the bundler package:

```bash
npm i -D @vuepress/bundler-vite@next
```

Specify the bundler option in your config file:

```ts title=".vuepress/config.ts"
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})
```

## Exports

### viteBundler

- Type: `(options?: ViteBundlerOptions) => Bundler`

- Details:

  Create a vite bundler instance.

### viteMergeConfig

- Type: `(configA: ViteUserConfig, configB: ViteUserConfig) => ViteUserConfig`

- Details:

  Merge two vite config objects, provided by vite's [mergeConfig](https://vite.dev/guide/api-javascript#mergeconfig) JavaScript API.

## Options

### viteOptions

- Details:

  Accepts all options of Vite.

- Also see:
  - [Vite > Config](https://vite.dev/config/)

### vuePluginOptions

- Details:

  Accepts all options of [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue).

- Also see:
  - [Vite > Plugins > Official Plugins](https://vite.dev/plugins/#vitejs-plugin-vue)

### configureVite

- Type: `(config: ViteUserConfig, isServer: boolean, isBuild: boolean) => ViteUserConfig | void`

- Details:

  Edit the internal vite config.

  This option accepts a function that will receive a vite config object as the 1st argument, an `isServer` flag as the 2nd argument and an `isBuild` flag as the 3rd argument. You can either mutate the config directly, or return an object to replace the vite config object.
