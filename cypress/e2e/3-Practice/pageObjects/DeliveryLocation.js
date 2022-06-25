class DeliveryLocation
{
    getCountrytxtBox(){
        return cy.get('#country')
    }

    getAgreeTCCheckBox(){
        return cy.get('div input[id="checkbox2"]')
    }
    getPurchaseBtn(){
        return cy.get('form.ng-untouched > .btn')
    }
}
export default DeliveryLocation