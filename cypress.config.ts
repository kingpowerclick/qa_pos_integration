const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: ['config.js', 'common_function.js'],
    specPattern: 'cypress/e2e/**/*.ts',
  },
});
