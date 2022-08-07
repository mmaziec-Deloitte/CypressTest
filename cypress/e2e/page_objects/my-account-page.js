export class MyAccountPage {

    static CheckMyInfo(name){
        cy.get('#center_column > h1').should('contain', 'My account');
    }
}