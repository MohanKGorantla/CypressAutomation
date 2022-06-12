/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('input[type="search"]')
        .type('ca')
      cy.get('.product:visible').should('have.length',4)
    })
  })