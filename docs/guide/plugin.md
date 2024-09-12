# Plugin

With the help of [Plugin API](../reference/plugin-api.md), VuePress plugin can provide different features for you.

## Official Plugin

VuePress team provides some official plugins.

You need to import and use them in your config file via the [plugins](../reference/config.md#plugins) option. For example, use the [@vuepress/plugin-google-analytics](https://ecosystem.vuejs.press/plugins/analytics/google-analytics.html) to integrate Google Analytics:

```ts
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default {
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-XXXXXXXXXX',
    }),
  ],
}
```

::: tip
Most plugins can only be used once. If the same plugin is used multiple times, only the last one will take effect.

However, some plugins can be used multiple times (e.g. [@vuepress/plugin-container](https://ecosystem.vuejs.press/plugins/container.html)), and you should check the documentation of the plugin itself for detailed guide.
:::

## Community Plugin

Community users have created lots of plugins and published them to [NPM](https://www.npmjs.com/search?q=keywords:vuepress-plugin). You should check the plugin's own documentation for detailed guide.

You can explore more plugins in [VuePress Marketplace](https://marketplace.vuejs.press/plugins/).

## Local Plugin

If you want to use your own plugin but don't want to publish it, you can create a local plugin.

It is recommended to use the [Config File](./configuration.md#config-file) directly as a plugin, because [almost all of the Plugin APIs are available](../reference/config.md#plugin-api), which would be more convenient in most cases.

But if you have too many things to do in your config file, you can consider to extract them into separate plugins, and use them in your config file:

```ts
import myPlugin from './path/to/my-plugin.js'

export default {
  plugins: [myPlugin()],
}
```

You can refer to [Advanced > Writing a Plugin](../advanced/plugin.md) for how to write your own plugin.
