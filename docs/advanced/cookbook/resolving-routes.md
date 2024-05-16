# Resolving Routes

For scalability and performance, VuePress V2 removes V1’s `$siteData.pages` and uses virtual routes during navigation.

This means that you need to use new route API in VuePress V2 to get and parse routes.

## Getting all routes

You can use `useRoutes` to get all routes. The return value of `useRoutes` is a Ref object containing all routes. Its props are route path of each route, and its values are the corresponding route information.

```ts
import { useRoutes } from 'vuepress/client'

const routes = useRoutes()

console.log(routes.value)
// {
// '/': { meta: { title: 'Home' }, loader: HomePageLoader },
// '/404.html': { meta: { title: 'Not Found' }, loader: NotFoundPageLoader },
// ...
// }

const routePaths = computed(() => Object.keys(routes.value))

console.log(routePaths.value) // => ['/‘, '/404.html', '/foo/', '/bar/', ...]
```

## Parsing route path

You can use `resolveRoutePath` to resolve the route path with given link. `resolveRoutePath` receives a link and an optional base path, and returns a resolved route path:

```ts
import { resolveRoutePath } from 'vuepress/client'

const routePath = resolveRoutePath('/foo/') // => '/foo/'
const routePath = resolveRoutePath('baz.html', '/foo/bar.html') // => '/foo/baz.html'
```

## Parsing route information

You can use `resolveRoute` to resolve route information for a given link. `resolveRoute` receives a link and an optional base path, and returns a resolved route information:

```ts
import { resolveRoute } from 'vuepress/client'

const route = resolveRoute('/foo/') // => { notFound: false, path: '/foo/', meta: { title: 'Foo' }, loader: FooPageLoader }
const route = resolveRoute('baz.html', '/foo/bar.html') // => { notFound: false, path: '/foo/baz.html', meta: { title: 'Baz' }, loader: BazPageLoader }
const route = resolveRoute('/not-exist.html') // => { notFound: true, path: '/not-exist.html', meta: { title: 'Not Found' }, loader: NotFoundPageLoader }
```

In particular, there is a `notFound` field in the returned data, which is used to identify whether a corresponding route exists for a given path. When the route does not exist, the `notFound` field in the return value is `true`, its `path` field is the normalized path, and the `meta` and `loader` fields are the `meta` and `loader` fields of the default 404 page.
