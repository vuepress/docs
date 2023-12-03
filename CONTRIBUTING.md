# VuePress Documentation Contributing Guide

## Overview

VuePress documentation is powered by VuePress itself, which is built from the source code of this repository.

All the markdown source files are placed in `docs` directory. We are maintaining two translations:

- English (en-US) in `/` path
- Chinese (zh-CN) in `/zh/` path

We have two different deployments:

- Release deployment powered by [Netlify](https://www.netlify.com). This deployment is built from the latest released version, so users will not see unreleased changes. The domain name is [https://v2.vuepress.vuejs.org](https://v2.vuepress.vuejs.org).
- Developer deployment powered by [GitHub Pages](https://pages.github.com). This deployment is built from the latest commit, so developers could preview the latest changes. The domain name is [https://vuepress.github.io](https://vuepress.github.io).
