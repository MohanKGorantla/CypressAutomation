/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.url()
        .should('include','/commands/actions')
      cy.get('#email1')
        .type('Mohan@gmail.com')
        .should('have.value','Mohan@gmail.com')
  
    })
  })