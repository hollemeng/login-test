const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 4000,
  viewportWidth: 1000,
  viewportHeight: 600,

  e2e: {
    // TODO: tempd debug
    //supportFile: false

    // Overriden for e2e
    defaultCommandTimeout: 5000,
    viewportWidth: 1280,
    viewportHeight: 720,

    baseUrl: 'https://practicetestautomation.com/',
    video: true,



    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: "[name]-report",
    overwrite: true,
    html: true,
    json: true
  },
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
