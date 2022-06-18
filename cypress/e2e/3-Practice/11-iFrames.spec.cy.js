/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('empty spec', function() {
    it('passes', function() {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     // We need to install cypress iframe plug-in's to work with i-frames
     // npm install -D cypress-iframe
     // we need 1st load the iframe using frameloaded methoad and pass frame info
     cy.frameLoaded('#courses-iframe')
     cy.iframe().find('a[href*="mentorship"]').eq(0).click()
     cy.wait(2000)
     cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

     

    })
  })