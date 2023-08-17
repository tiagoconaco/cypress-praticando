const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4fesna',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do Tiago',
      reportPageTitle: 'Projeto do Tiago'
    },
    baseUrl: "http://www.automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    
    },
  },
});
