import { defineConfig } from "cypress";
// verify download import
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      // verify download import  
      on('task', verifyDownloadTasks);
      
      
    },
    env: {
      demoVar: "Hello cypress.config !!!",
      theInternet: "https://the-internet.herokuapp.com/",
      Angular: "https://www.globalsqa.com",
      demoQA: "https://demoqa.com"
    },
  },
      pageLoadTimeout: 60000,
      viewportHeight: 1000,
      viewportWidth: 1400,
    
});

