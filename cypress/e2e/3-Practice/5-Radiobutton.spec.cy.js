/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     //Visible elements
     cy.get('#displayed-text').should('be.visible')
     cy.get('#hide-textbox').click()
     cy.get('#displayed-text').should('not.be.visible')
     cy.get('#show-textbox').click()
     cy.get('#displayed-text').should('be.visible')

     //Radio buttos
     cy.get('input[value="radio2"]').check().should('have.value', 'radio2')


  





    })
  })