/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     // Static Dropdown
     cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

     // Dynamic Dropdown
     cy.get('#autocomplete').type('ind')
     cy.get('.ui-menu-item div').each(($e1, index, $item)  => {
      if($e1.text() === "India")
      {
        cy.wrap($e1).click({force: true})
      }

     })
     cy.get('#autocomplete').should('have.value', 'India')

  





    })
  })