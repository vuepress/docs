# Built-in Components

## AutoLink

- Props:

  - config
    - Type: `AutoLinkConfig`
    - Required: `true`

```ts
interface AutoLinkConfig {
  /**
   * Pattern to determine if the link should be active, which has higher priority than `exact`
   */
  activeMatch?: RegExp | string

  /**
   * The `aria-label` attribute
   */
  ariaLabel?: string

  /**
   * Whether the link should be active only if the url is an exact match
   */
  exact?: boolean

  /**
   * URL of the auto link
   */
  link: string

  /**
   * The `rel` attribute
   */
  rel?: string

  /**
   * The `target` attribute
   */
  target?: string

  /**
   * Text of the auto link
   */
  text: string
}
```

- Usage:

```md
<AutoLink :config="autoLinkConfig" />

<AutoLink :config="autoLinkConfig">
  default slot
</AutoLink>

<AutoLink :config="autoLinkConfig">
  <template #before>before slot</template>
  <template #after>after slot</template>
</AutoLink>

<AutoLink :config="autoLinkConfig">
  <template v-slot="config">{{ config.text }}</template>
</AutoLink>

<AutoLink :config="autoLinkConfig">
  <template #before="config">{{ config.text }}</template>
</AutoLink>
```

- Details:

  This component will automatically render internal link as `<RouteLink>`, and render external link as `<a>`. It will also add necessary attributes correspondingly.

  You can make use of the `before` and `after` slots to render content before and after the text. Also, you can use the `default` slot to render the text (default text is `config.text`).

  This component is mainly for developing themes. Users won't need it in most cases. For theme authors, it's recommended to use this component to render links that could be either internal or external.

## ClientOnly

- Usage:

```md
<ClientOnly>
  <NonSsrFriendlyComponent />
</ClientOnly>
```

- Details:

  This component and its children will only be rendered in client-side. That means, it will not be rendered to HTML during build (SSR).

  If a component is trying to access Browser / DOM APIs directly in `setup()`, an error will occur during build because those APIs are unavailable in Node.js environment. In such case, you could do either:

  - Modify the component to only access Browser / DOM APIs in `onBeforeMount()` or `onMounted()` hook.
  - Wrap the component with `<ClientOnly>`.

:::tip
Since Vue 3.5, if you only want to avoid hydration mismatch, you can try the new [data-allow-mismatch](https://blog.vuejs.org/posts/vue-3-5#data-allow-mismatch) attribute instead of `<ClientOnly>` component.
:::

## Content

- Props:

  - path
    - Type: `string`
    - Required: `false`

- Usage:

```md
<Content path="/path/to/page.md" />
```

- Details:

  This component will render the Markdown content of a page.

  If the `path` prop is not provided, it will render the page content of current route.

  This component is mainly for developing themes. You won't need it in most cases.

- Also see:
  - [Node API > Page Properties > path](./node-api.md#path)

## RouteLink

- Props:

  - to
    - Type: `string`
    - Required: `true`
  - active
    - Type: `boolean`
    - Required: `false`
    - Default: `false`
  - activeClass
    - Type: `string`
    - Required: `false`
    - Default: `'route-link-active'`

- Usage:

```md
<RouteLink to="/path/to/target-page.md">target page</RouteLink>
<RouteLink active to="/path/to/current-page.md">current page</RouteLink>
```

- Details:

  This component will render a link to the target page.

  If the `active` prop is set to `true`, the link will have an extra `activeClass`. Notice that the active status won't be updated automatically when the route changes.

  This component is mainly for developing themes. Users won't need it in most cases. For theme authors, it's recommended to use this component to render internal links instead of the `<RouterLink>` component from `vue-router`.
