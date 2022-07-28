export class MyAccountPage {

    static CheckMyInfo(name){

        cy.get('.myaccount-link-list').contains(name).click();

    }
}