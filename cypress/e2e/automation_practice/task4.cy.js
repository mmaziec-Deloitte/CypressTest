import { MainPage } from "../page_objects/main-page"
import { CartPage } from "../page_objects/cart-page";
import { WomenPage } from "../page_objects/women-page"

context('e-shop go to', () => {

    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('Adding items to a cart from json file', () => {
        let data;
        before(() => {
            cy.fixture("items").then((itemsData) => {
                data = itemsData;
            })
        })

        it('Should add 2 products from json file to a cart', () => {
            WomenPage.openWomenCategory();
            WomenPage.checkIfWomenCategoryIsOpen();
            WomenPage.addElementToCartByName(data[0].name);
            WomenPage.clickContinueShopping();
            WomenPage.addElementToCartByName(data[1].name);
            WomenPage.clickProccedShopping();
            WomenPage.checkIfShoppinCartSummaryIsOpen();
            CartPage.checkIfProductsPriceIsCorrect(1, "$" + data[0].price.toFixed(2));
            CartPage.checkIfProductsPriceIsCorrect(2, "$" + data[1].price.toFixed(2));
            let total = data[0].price + data[1].price
            total = "$" + total.toFixed(2);
            CartPage.checkIfTotalPriceIsCorrect(total);
        })
    })
})