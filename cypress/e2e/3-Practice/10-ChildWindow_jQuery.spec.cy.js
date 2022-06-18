/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     // We can use jquery methos to get the value of href propery for an element in DOM
     // Note: In the latest version of cypress, multi domain support was included
     cy.get('#opentab').then(function(el) {
      const url = el.prop('href')
      cy.log(url)
      cy.visit(url)
     })
     
    

    })
  })