const { defineConfig } = require("cypress");


const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
