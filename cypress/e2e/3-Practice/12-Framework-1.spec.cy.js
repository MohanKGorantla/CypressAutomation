/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('empty spec', function() {

  before(function() {
    cy.fixture('example').then(function(data){
      // We are mow making data globaal using another varibale as 'this.data'
      this.data = data
    })
  })

    it('passes', function() {
     cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
     cy.get('input[name="name"]').eq(0).type(this.data.name)
     cy.get('select').select(this.data.gender)
     cy.get('input[name="name"]').eq(0).should('have.value',this.data.name)
     cy.get('input[name="name"]').eq(0).should('have.attr','minlength',2)
     cy.get('#inlineRadio3').should('be.disabled')
     cy.get('a[href*="shop"]').click()
     cy.addProduct('Blackberry')

     

     

    })
  })