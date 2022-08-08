export class WomenPage {

    static openWomenCategory() {
        cy.get('#block_top_menu').contains("Women").click();
    }

    static checkIfWomenCategoryIsOpen() {
        cy.url().should('eq', 'http://automationpractice.com/index.php?id_category=3&controller=category');
    }

    static addElementToCartByName(productName) {
        cy.get(".product_list").find(".product-container").contains(productName).parents('.product-container').contains('Add to cart').click();
    }

    static clickContinueShopping() {
        cy.wait(4000);
        cy.get('.continue').contains('Continue shopping').click();
    }

    static clickProccedShopping() {
        cy.wait(4000);
        cy.get('.button-medium').contains("Proceed").click();
    }

    static checkIfShoppinCartSummaryIsOpen() {
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order');
    }

    static addElementToCartByIdAndGetPrice(productId) {
        let price = Cypress.$(`.product_list > :nth-child(${productId}) .price`);
        cy.get(".product_list > :nth-child(" + productId+ ")").contains('Add to cart').click();
        console.log(price[0].innerHTML.trim());
        return price[0].innerHTML.trim();
    }


}