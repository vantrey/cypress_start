import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    fixturesFolder: "src/cypress/fixtures",
    specPattern: "src/cypress/e2e",
    supportFolder: "src/cypress/integration",
    screenshotsFolder: "src/cypress/screenshots",
    videosFolder: "src/cypress/videos",
    downloadsFolder: "src/cypress/downloads",
    supportFile: "src/cypress/support/e2e.ts",
    video: false,
    screenshotOnRunFailure: false
  },
});
