/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#opentab').invoke('removeAttr','target').click()
     cy.url().should('include', 'rahulshettyacademy')
     cy.go('back')
     
    
     

    


  





    })
  })