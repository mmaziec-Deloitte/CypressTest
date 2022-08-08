export class CartPage {

    static checkIfProductsPriceIsCorrect(index, price) {
        cy.get(`#cart_summary > tbody > :nth-child(${index}) > .cart_unit > .price`).find('.price').should('have.text', price);
    }

    static checkIfTotalPriceIsCorrect(price) {
        let total = cy.get('#total_product').invoke('text').should('eq', price);
    }
}