class HomePage
{

    getEditBox()
    {
        return cy.get('input[name="name"]').eq(0)
    }


    getTwoWayDataBinding()
    {
        return cy.get('input[name="name"]').eq(1)
    }

    getGender()
    {
        return cy.get('select')
    }

    getRadioButtton()
    {
        return cy.get('#inlineRadio3')
    }

    getShopButton()
    {
        return cy.get('a[href*="shop"]')
    }

}

export default HomePage;