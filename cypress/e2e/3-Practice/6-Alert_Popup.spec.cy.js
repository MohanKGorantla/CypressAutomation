/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#alertbtn').click()
     cy.get('#confirmbtn').click()
     // Cypress auto handles the alert and  confirm pop-up's
     cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
     })
     cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
     })


    


  





    })
  })