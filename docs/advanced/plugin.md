# Writing a Plugin

::: tip
Before reading this guide, you'd better learn the VuePress [architecture](./architecture.md) first.
:::

## Create a Plugin

A plugin should be a plain JavaScript object that satisfies the [Plugin API](../reference/plugin-api.md), which is called a _Plugin Object_:

```ts
const fooPlugin = {
  name: 'vuepress-plugin-foo',
  // ...
}
```

A plugin could also be a function that receives the [app instance](../reference/node-api.md#app) as the param and returns a _Plugin Object_, which is called a _Plugin Function_:

```ts
const barPlugin = (app) => ({
  name: 'vuepress-plugin-bar',
  // ...
})
```

A plugin usually needs to allow user options, so we typically provide users with a function to receive options, and returns a _Plugin Object_ or a _Plugin Function_. Then your plugin should be converted like this:

```ts
const fooPlugin = (options) => ({
  name: 'vuepress-plugin-foo',
  // ...
})

const barPlugin = (options) => (app) => ({
  name: 'vuepress-plugin-bar',
  // ...
})
```

## Publish to NPM

After creating a plugin, you should follow some conventions in the [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) file before publishing it to NPM:

```json
{
  "name": "vuepress-plugin-foo",
  "keywords": ["vuepress-plugin"]
}
```

- Set `name` to follow the naming convention, i.e. `vuepress-plugin-xxx` or `@org/vuepress-plugin-xxx`, which should be consistent with the [name](../reference/plugin-api.md#name) field of the _Plugin Object_.
- Set `keywords` to include `vuepress-plugin`, so that users can search your plugin on NPM.
