import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  projectId: 's4czm6',
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
