export class MainPage {

    static openAutomationPracticePage() {

        cy.visit("http://automationpractice.com/index.php");

    }

    static clickCategory(name) {

        cy.get('#block_top_menu').contains(name).click();

    }

    static clickShoppingCart() {

        cy.get('.shopping_cart').contains("Cart").click();

    }

    static clickSignIn() {

        cy.get('.login').contains(("Sign in")).click();

    }

    static clickPhoto1() {

        cy.get('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line')
            .click();

    }

    static addItem1() {

        cy.wait(4000);
       /* cy.get('#our_price_display').should(($price1) => {
            const productPrice1 = $price1.text();
            cy.log(productPrice1);
        });*/
        cy.get('.exclusive').contains('Add to cart').click();
        cy.wait(12000);
        cy.get('.continue').contains('Continue shopping').click();
        //return productPrice1;
    }

    static clickPhoto2() {
        cy.get('#homefeatured > li:nth-child(2)').click();
    }

    static addItem2() {

        cy.wait(4000);
        cy.get('#our_price_display').should('contains', '$27.00')
        /*cy.get('#our_price_display').should(($price2) => {
            const productPrice2 = $price2.text();
            cy.log(productPrice2);
        });*/
        cy.get('.exclusive').contains('Add to cart').click();
        cy.wait(12000);
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a').contains('Proceed to checkout').click();
        //return productPrice2;
    }

    static comparePrices(price1, price2){
        cy.get('#product_price_1_1_0 > span').should('have.text', price1);
        cy.get('#product_price_2_7_0 > span').should('have.text', price2);


    }
}