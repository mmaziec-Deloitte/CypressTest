

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
        cy.get('.exclusive').contains('Add to cart').click();
        cy.wait(6000);
        cy.get('.continue').contains('Continue shopping').click();
    }

    static clickPhoto2() {
        cy.get('#homefeatured > li:nth-child(2)').click();
    }

    static addItem2() {

        cy.wait(4000);
        cy.get('.exclusive').contains('Add to cart').click();
        cy.wait(6000);
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a').contains('Proceed to checkout').click();
    }

    static comparePrices(){
        let price1;
        cy.readFile('./prices.json').then((list) => {
            price1 = list[0];
            //price2 = list[1].price
        });
        let price2;
        cy.readFile('./prices.json').then((list) => {
            price2 = list[1];
            //price2 = list[1].price
        });;

        cy.get('#product_price_1_1_0 > span').should('have.text', price1);
        cy.get('#product_price_2_7_0 > span').should('have.text', price2);
    }

    static getPriceForItem1(){
        cy.get('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.content_price > span')

            .invoke('text').then(sometext => {
            const cena = sometext;
            cy.log("Cena: ",cena);
                cy.readFile("./cypress/fixtures/prices.json").then((list) => {
                    list.push({price: cena.trim()})
                    cy.writeFile("./prices.json", list);
                })
        });
    }

    static getPriceForItem2(){
        cy.get('#homefeatured > li:nth-child(2) > div > div.right-block > div.content_price > span')

            .invoke('text').then(sometext => {
            const cena = sometext;
            cy.log("Cena: ",cena);
                cy.readFile("./cypress/fixtures/prices.json").then((list) => {
                    list.push({price: cena.trim()})
                    cy.writeFile("./prices.json", list);
                })
        });
    }

    static getItemPricesFromMobile(){
        let price1;
        cy.get('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.content_price > span')
            .invoke('text').then(sometext => {
                const cena = sometext;
                cy.log("Cena: ",cena)
                price1 = cena;
            });;
        let price2;
        cy.get('#homefeatured > li:nth-child(2) > div > div.right-block > div.content_price > span')
            .invoke('text').then(sometext => {
            const cena = sometext;
            cy.log("Cena: ",cena)
            price2 = cena;
        });;
        cy.log("Cena: ",price1);
        cy.log("Cena: ",price2);
        return [price1, price2];
    }

    static comparePricesFromMobile(){
        cy.fixture("prices.json").then(priceData => {
            cy.get('#product_price_1_1_0 > span').should('have.text', priceData[0].price);
            cy.get('#product_price_2_7_0 > span').should('have.text', priceData[1].price);
        })

    }

    static clickSignOut() {
        cy.get('#header > div.nav > div > div > nav > div:nth-child(2) > a').contains(("Sign out")).click();
    }
}