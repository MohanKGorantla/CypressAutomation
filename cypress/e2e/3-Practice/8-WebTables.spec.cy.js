/// <reference types="Cypress" />
describe('empty spec', function() {
    it('passes', function() {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('tr td:nth-child(2)').each(($e1, index, $item) => {

      const text = $e1.text()
      if(text.includes('Python'))
      {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(element) {
          const actualprice = element.text()
          expect(actualprice).to.equal('25')
        })

      }
     
     })
   
    
     

    


  





    })
  })