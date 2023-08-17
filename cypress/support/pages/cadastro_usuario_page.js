///<reference types="cypress"/>

export default {
    clicarCadastrar(){
        cy.get('#btnRegister')
            .click()    
    },
    validarMensagemErro(mensagem){
        cy.get('.errorLabel')
            .should('have.text',mensagem)
            .then((element) => {
                expect(element).be.visible
                expect(element.text()).eq(mensagem)
            })
    },
    preencheNome(name){
        cy.get('#user').type(name)
    },
    preencheEmail(email){
        cy.get('#email').type(email)
    },
    preencheSenha(senha){
        cy.get('#password').type(senha)
    },
    cadastroRealizado(name){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text','Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text',`Bem-vindo ${name}`)

        
    }
}