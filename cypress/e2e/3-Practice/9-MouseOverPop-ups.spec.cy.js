/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     // Using jquery method - show to view hidden elements
     // We use invoke method and pass show to display the hidden elements
     cy.get('.mouse-hover-content').invoke('show')
     cy.contains('Top').click()
     cy.url().should('include','top')
     

     // Using cypress command to click on hidden elements
     /*cy.contains('Top').click({force:true})
     cy.url().should('include','top')*/
    
   
    
     

    


  





    })
  })