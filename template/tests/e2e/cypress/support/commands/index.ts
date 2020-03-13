/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import 'cypress-xpath';
import 'cypress-pipe';
// import 'cypress-plugin-retries';
// import 'cypress-failed-log';
import 'cypress-commands';
import 'cypress-plugin-snapshots/commands';
import '@testing-library/cypress/add-commands';
import './mailtrap';

Cypress.on('fail', (error) => {
  // we now have access to the err instance
  // and the mocha runnable this failed on

  throw error; // Throw error to have test still fail
});

Cypress.on('uncaught:exception', () => false);
