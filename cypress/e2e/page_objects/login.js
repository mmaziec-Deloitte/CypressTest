export class Login{

    static provideEmail(){
        cy.get('#email').type('mmaziec@deloittece.com').should('have.value', 'mmaziec@deloittece.com')
    }

    static providePassword(){
        cy.get('#passwd').type('StarWars').should('have.value', 'StarWars')
    }

    static clickSignInButton(){
        cy.get('#SubmitLogin').contains(("Sign in")).click();
    }

    static provideEmailJson(email){
        cy.get('#email').type(email).should('have.value', email)

    }

    static providePasswordJson(password){
        cy.get('#passwd').type(password).should('have.value', password)

    }
}