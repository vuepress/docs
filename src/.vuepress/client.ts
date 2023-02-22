import { defineClientConfig } from "@vuepress/client";

import NpmBadge from "./components/NpmBadge.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("NpmBadge", NpmBadge);
  },
});
