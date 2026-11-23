# Client API

Client API can be imported from `vuepress/client`.

## Composition API

### useClientData

- Details:

  Returns all the client data ref objects.

  Each property can also be accessed by the following composition APIs, except `pageHeadTitle`, which can only be accessed via `useClientData()`.

  The client data object also provides the following aliases: `frontmatter` (`pageFrontmatter`), `head` (`pageHead`), `headTitle` (`pageHeadTitle`), `lang` (`pageLang`), `page` (`pageData`), `site` (`siteData`) and `siteLocale` (`siteLocaleData`).

  The composition APIs also have the following aliases: `useData` (`useClientData`), `useFrontmatter` (`usePageFrontmatter`), `useHead` (`usePageHead`), `useLang` (`usePageLang`), `usePage` (`usePageData`), `useSite` (`useSiteData`) and `useSiteLocale` (`useSiteLocaleData`).

- Example:

```vue
<script setup lang="ts">
import { useClientData } from 'vuepress/client'

const {
  pageData,
  pageFrontmatter,
  pageHead,
  pageHeadTitle,
  pageLang,
  routeLocale,
  siteData,
  siteLocaleData,
} = useClientData()
</script>
```

### useLayouts

- Details:

  Returns the layouts ref object.

  The value is the layouts registered by all [client config files](./plugin-api.md#clientconfigfile), including the `Layout` and `NotFound` layouts that are required by a theme.

- Also see:
  - [Advanced > Writing a Theme](../advanced/theme.md)

### usePageComponent

- Details:

  Returns the page component ref object of current page.

  The value is the component loaded from the page chunk.

### usePageData

- Details:

  Returns the page data ref object of current page.

- Also see:
  - [Node API > Page Properties > data](./node-api.md#data)
  - [Plugin API > extendsPage](./plugin-api.md#extendspage)

### usePageFrontmatter

- Details:

  Returns the frontmatter ref object of current page.

  The value is the `frontmatter` property of the page data.

### usePageHead

- Details:

  Returns the head config ref object of current page.

  The value is obtained by merging and deduplicating [head](./frontmatter.md#head) frontmatter and [head](./config.md#head) config.

### useClientData().pageHeadTitle

- Type: `ComputedRef<string>`

- Details:

  Returns the head title ref object of current page.

  The value is obtained by joining the page title and site title. It is a computed ref returned by [`useClientData`](#useclientdata) instead of being a standalone composition API, and the `<title>` element is kept in sync with it by [`useUpdateHead`](#useupdatehead).

  The value can be customized via [`resolvers`](#resolvers).

- Example:

```ts
import { useClientData } from 'vuepress/client'

const { pageHeadTitle } = useClientData()
```

### usePageLang

- Details:

  Returns the language ref object of current page.

  The value is the `lang` property of the page data.

### usePageLayout

- Details:

  Returns the layout component ref object of current page.

  The value is resolved from the [layout](./frontmatter.md#layout) frontmatter and the layouts registered by [client config files](./plugin-api.md#clientconfigfile).

- Also see:
  - [Advanced > Writing a Theme](../advanced/theme.md)

### useRoutes

- Details:

  Returns the routes ref object.

  The value is the `routes` property of the site data.

- Also see:
  - [Advanced > Cookbook > Resolving Routes](../advanced/cookbook/resolving-routes.md)

### useRouteLocale

- Details:

  Returns the locale path ref object of current route.

  The value is one of the keys of the [locales](./config.md#locales) config.

### useRoutePath

- Details:

  Returns the route path ref object of current route.

  The value is the `path` property of the current route.

### useRedirects

- Details:

  Returns the redirects ref object.

  The keys are the source route paths and the values are the target route paths. It is used internally to resolve route paths, see [`resolveRoutePath`](#resolveroutepath).

### useSiteData

- Details:

  Returns the site data ref object.

### useSiteLocaleData

- Details:

  Returns the site data ref object of current locale.

  The properties of current locale have been merged into the root-level properties.

### onContentUpdated

- Details:

  When the content of the markdown file changes, the callback is triggered.

  This function can only be called during the `setup` phase of the component.

  ```vue
  <script setup>
  import { onContentUpdated } from 'vuepress/client'

  onContentUpdated((reason) => {
    console.log(`content updated reason: ${reason}`)
  })
  </script>
  ```

### useUpdateHead

- Details:

  Returns a function to update the `<head>` of current page.

  It applies the current [`usePageHead`](#usepagehead) value to the document head immediately. VuePress keeps the head in sync automatically after the client app is mounted, so this function is only needed when you want to force a synchronous update.

  This function can only be called during the `setup` phase of a component in the client app.

## Helpers

### defineClientConfig

- Details:

  Helper for creating [clientConfigFile](./plugin-api.md#clientconfigfile).

- Also see:
  - [Advanced > Cookbook > Usage of Client Config](../advanced/cookbook/usage-of-client-config.md)
  - [Advanced > Cookbook > Usage of Client Config > Scroll Restoration](../advanced/cookbook/usage-of-client-config.md#scroll-restoration)

### resolveRoute

- Details:

  Parses the route of the given link.

- Also see:
  - [Advanced > Cookbook > Resolving Routes](../advanced/cookbook/resolving-routes.md)

### resolveRoutePath

- Details:

  Parses the route path of the given link.

- Also see:
  - [Advanced > Cookbook > Resolving Routes](../advanced/cookbook/resolving-routes.md)

### resolveRouteFullPath

- Details:

  Parses the route full path of the given link, i.e. the resolved route path with the hash and query of the given link preserved.

- Also see:
  - [Advanced > Cookbook > Resolving Routes](../advanced/cookbook/resolving-routes.md)

### withBase

- Details:

  Prefix URL with site [base](./config.md#base).

- Also see:
  - [Guide > Assets > Base Helper](../guide/assets.md#base-helper)

## Constants

There are some constants that available in the client side code.

To shim the types of these constants in client side code, add `vuepress/client-types` to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["vuepress/client-types"]
  }
}
```

### `__VUEPRESS_VERSION__`

- Type: `string`

- Details:

  Version of VuePress core package.

### `__VUEPRESS_BASE__`

- Type: `string`

- Details:

  The [base](./config.md#base) option from config.

### `__VUEPRESS_DEV__`

- Type: `boolean`

- Details:

  An environment flag indicating whether it is currently running in `dev` mode.

### `__VUEPRESS_SSR__`

- Type: `boolean`

- Details:

  An environment flag indicating whether it is currently running in server-side-rendering (SSR) build.

## Advanced

### resolvers <Badge text="experimental" />

- Type: `Record<string, Function>`

- Details:

  An reactive object, methods of which determining how to resolve global computed.

- Example:

Customizing the format of `<title>` in client config file:

```ts
import { defineClientConfig, resolvers } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    resolvers.resolvePageHeadTitle = (page, siteLocale) =>
      `${siteLocale.title} > ${page.title}`
  },
})
```

::: danger
`resolvers` will affect the basic functionality of VuePress. Please make sure you have fully understood its purpose before modifying it.
:::
