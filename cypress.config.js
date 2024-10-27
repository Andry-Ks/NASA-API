const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      frontendUrl:'https://test-nasa-api.vercel.app/'
      //frontendUrl: 'http://localhost:3000'
    },
    viewportWidth: 1440,
    viewportHeight: 900,
  },
});
