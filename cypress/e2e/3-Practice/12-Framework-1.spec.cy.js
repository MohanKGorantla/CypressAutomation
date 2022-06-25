/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import HomePage from './pageObjects/HomePage'
import 'cypress-iframe'
import ProductsPage from './pageObjects/ProductsPage'
import CheckoutPage from './pageObjects/CheckoutPage'
import DeliveryLocation from './pageObjects/DeliveryLocation'

describe('Building Framework', 

{
  env: {
    angular_url: '/angularpractice',
  },
},

function() {


  before(function() {
    cy.fixture('example').then(function(data){
      // We are mow making data globaal using another varibale as 'this.data'
      this.data = data
    })
  })

    it('passes', function() {
      const homePage = new HomePage()
      const productPage = new ProductsPage()
      const checkoutPage = new CheckoutPage()
      const deliveryLocationPage = new DeliveryLocation()
      // We are setting environment varaibales for specific suite by passing the env value to config(In the descible)
     cy.visit(Cypress.env('baseURL')+ Cypress.env('angular_url'))
     homePage.getEditBox().type(this.data.name)
     homePage.getGender().select(this.data.gender)
     homePage.getTwoWayDataBinding().should('have.value',this.data.name)
     homePage.getEditBox().should('have.attr','minlength',2)
     homePage.getRadioButtton().should('be.disabled')
     homePage.getShopButton().click()

     this.data.productName.forEach(function(element) {
      cy.addProduct(element)
     }
      );
     productPage.getCheckoutbtn().click()
     var sum = 0
     cy.get('tr td:nth-child(4) strong').each(($e1, index,$item) => {

      var price = $e1.text()
      price = price.split(' ')
      // price[0]= $. price[1]= 65000
      sum = Number(sum)+Number(price[1].trim())

     }).then( function(){
      cy.log(sum)

     })
     cy.get('h3 strong').then(function(element) {
      var total = element.text()
      total = total.split(' ')
      cy.log(total[1])
      total = Number(total[1].trim())
      cy.log(total)
      expect(total).to.equal(sum)
     })
     checkoutPage.getcheckoutbutton().click()
     deliveryLocationPage.getCountrytxtBox().type('India')
     // cy.wait(5000)
     // We can update the 'defaultCommandTimeout' using this API
     // Remember, any changes that you make to configuration using this API will be in effect
     // for the remainder of the tests in the same spec file.
     //Cypress.config('defaultCommandTimeout', 8000)
     //Cypress.config('defaultCommandTimeout', 10000)
     Cypress.config('defaultCommandTimeout', 10000)
     Cypress.config('defaultCommandTimeout') // => 10000
     cy.get('.suggestions > ul > li > a').click({force:true})
     deliveryLocationPage.getAgreeTCCheckBox().check({force:true})
     deliveryLocationPage.getPurchaseBtn().click()
     cy.get('.alert').then(function(element){
      const msg = element.text()
      expect(msg).to.includes('Success')

     })





    



    })
  })