/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('input[type="search"]')
        .type('ca')
      cy.get('.product:visible').should('have.length',4)
      // parent child chaining
      cy.get('.products').find('.product').should('have.length',4)
      // To iterate through array of elements and selecting the item based on condition
      // Aliasing using as
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').each(($e1, index, $item) => {
        const vegtext= $e1.find('h4.product-name').text()
        if(vegtext.includes('Cashews'))
        {
          // Performing click on find method was depcreated and henxe we need to use cy.wrp to resolve the promise
          cy.wrap($e1).find('button').click()
        }

      })
      // Using jquery methods in cypress, we need resolve the promise before using jquery method(text())
      cy.get('.brand').then(($el) => {
        const logo = $el.text()
        cy.log(logo)

      })

      // Using jquery methods in cypress, we need resolve the promise before using jquery method(text())
      cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())

      })

      // Verifying the logo text
      cy.get('.brand').should('have.text','GREENKART' )
      cy.get('.cart-icon').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()





    })
  })