/// <reference types="Cypress" />
/// <reference types="cypress-pipe" />

after(() => {
  cy.task('reporter', 'test run');
});
