///<reference types="cypress"/>

export default {
    acessarCadastroUsuario() {
        cy.visit('/')
            .get('#top_header')
            .should('be.visible')
        cy.get('.fa-lock').click()
    }
}