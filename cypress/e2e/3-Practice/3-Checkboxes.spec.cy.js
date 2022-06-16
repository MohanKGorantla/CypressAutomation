/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
     cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
     cy.get('[type="checkbox"]').check(['option2', 'option3'])





    })
  })