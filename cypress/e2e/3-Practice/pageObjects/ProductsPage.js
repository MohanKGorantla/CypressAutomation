class ProductsPage
{

    getCheckoutbtn() {
        return cy.get("a[class='nav-link btn btn-primary']")
    }
}
export default ProductsPage