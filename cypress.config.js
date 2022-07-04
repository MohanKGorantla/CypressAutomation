const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },

  projectId: 'm51cxe',
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 8000,
  env: {
    baseURL: 'https://www.rahulshettyacademy.com',
    angular_url: '/angularpractice'
  },
  
  e2e: {
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});
