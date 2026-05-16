# Introduction

VuePress is a markdown-centered static site generator (SSG). You can write your content (documentations, blogs, etc.) in [Markdown](https://en.wikipedia.org/wiki/Markdown), then VuePress will help you to generate a static site to host them.

The purpose of creating VuePress was to support the documentation of Vue.js and its sub-projects, but now it has been helping a large amount of users to build their documentation, blogs, and other static sites.

## How It Works

A VuePress site is in fact a single-page application (SPA) powered by [Vue](https://vuejs.org/) and [Vue Router](https://router.vuejs.org).

Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with [markdown-it](https://github.com/markdown-it/markdown-it) and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.

During development, we start a normal dev-server, and serve the VuePress site as a normal SPA. If you’ve used Vue before, you will notice the familiar development experience when you are writing and developing with VuePress.

During build, we create a server-rendered version of the VuePress site and render the corresponding HTML by virtually visiting each route. This approach is inspired by [Nuxt](https://nuxtjs.org/)'s `nuxt generate` command and other projects like [Gatsby](https://www.gatsbyjs.org/).

## VuePress and VitePress: The Connection

VitePress can be seen as the younger sibling of VuePress. Both were originally created by Evan You, the author of Vue.js. Today, VitePress is maintained by the Vue.js team, while VuePress is maintained by the VuePress team.

The history goes like this: VuePress v0 and v1 were built on top of Webpack. Later, when Evan created Vite, he started a new static site generator based on it — VitePress — reusing some ideas and code from VuePress. At the same time, the community forked the VuePress v2 branch, continued its development, and added support for Webpack, Vite, and Rspack.

At one point, we discussed merging the two projects under the VuePress brand. However, over time their goals and technical directions diverged. As a result, the Vue.js team chose to focus on VitePress, while the community — now the VuePress team — took over VuePress and continues to drive its development forward.

As a user, you can choose either project depending on your needs. VitePress is tightly integrated with Vite. VuePress, on the other hand, is designed to support different bundlers: it supports Vite, Webpack and Rspack today, and open to any other bundlers. In addition, VuePress has an official [ecosystem](https://ecosystem.vuejs.press/) project and provides a wide range of plugins, making it easier to build sites with features.
