///<reference types="cypress"/>

import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'

import { faker } from '@faker-js/faker';

describe('Cadastro de usuário', () =>{

    beforeEach('Acessar a Tela de Cadastro de Usuário.',() => {
        commum_page.acessarCadastroUsuario()  

    })
    it('Campo NOME VAZIO', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')    
    })
    it('Campo E-MAIL VAZIO', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.clicarCadastrar() 
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })
    it('Campo E-MAIL INVÁLIDO', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail('testesemarroba.com')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })
    it('Campo SENHA VAZIA', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })
    it('Campo SENHA INVÁLIDO', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha(12345)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro realizado com Sucesso', async () => {
        var name = await faker.person.fullName()
        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha(faker.internet.password())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.cadastroRealizado(name)
    })
})