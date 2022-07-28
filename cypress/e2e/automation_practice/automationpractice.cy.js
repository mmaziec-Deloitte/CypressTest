///<reference types="cypress" />
import {MainPage} from "../page_objects/main-page"
import {Login} from "../page_objects/login"
import {MyAccountPage} from "../page_objects/my-account-page"
//import {WomenPage} from "../page_objects/women-page"
//import {ShoppingCart} from "../page_objects/shopping_cart-page"

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('menu bar', () => {

        it('should open category: Women', () => {
            MainPage.clickCategory('Women');
           // WomenPage.checkIfWomenCategoryisOpen();
        })

        it('should open cart page', () => {
            MainPage.clickShoppingCart();
           // ShoppingCart.checkIfShoppingCartisOpen();
        })

    })

    describe('sign-in', () => {

        it('should sign in to the given account and check user details', () => {
            MainPage.clickSignIn();
            Login.provideEmail();
            Login.providePassword();
            Login.clickSignInButton();
            MyAccountPage.CheckMyInfo("My personal information");
        })

    })

    describe('sign-in with json data', () => {

        it('should sign in to the given account and check user details', () => {
            cy.fixture('data.json').then(users => {
                MainPage.clickSignIn();
                Login.provideEmailJson(users.email);
                Login.providePasswordJson(users.password);
                Login.clickSignInButton();
                MyAccountPage.CheckMyInfo("My personal information");
            })
        })
        })

    describe('add two products to the cart and check their prices', () => {

        it.only('should add two products and check their prices', () => {

            MainPage.clickPhoto1();
            const price1 = MainPage.addItem1();
            MainPage.openAutomationPracticePage();
            MainPage.clickPhoto2();
            const price2 = MainPage.addItem2();
            MainPage.comparePrices(price1, price2);


        })
    })



})

