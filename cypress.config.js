const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
     
      
    },
  },
});
