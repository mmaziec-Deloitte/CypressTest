///<reference types="cypress" />
import {MainPage} from "../page_objects/main-page"
import {Login} from "../page_objects/login"
import {MyAccountPage} from "../page_objects/my-account-page"


context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('menu bar', () => {

        it('should open category: Women', () => {
            MainPage.clickCategory('Women');
        })

        it('should open cart page', () => {
            MainPage.clickShoppingCart();
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
                Login.provideEmailJson(users[0].email);
                Login.providePasswordJson(users[0].password);
                Login.clickSignInButton();
                MyAccountPage.CheckMyInfo("My personal information");
                MainPage.clickSignOut();
                MainPage.openAutomationPracticePage();
                MainPage.clickSignIn();
                Login.provideEmailJson(users[1].email);
                Login.providePasswordJson(users[1].password);
                Login.clickSignInButton();
                MyAccountPage.CheckMyInfo("My personal information");
            })
        })
        })

    describe('add two products to the cart and check their prices', () => {
        it('should add two products and check their prices', () => {

            MainPage.getPriceForItem1();
            MainPage.getPriceForItem2();
            MainPage.clickPhoto1();
            MainPage.addItem1();
            MainPage.openAutomationPracticePage();
            MainPage.clickPhoto2();
            MainPage.addItem2();
            MainPage.comparePricesFromMobile();
        })
    })



})

