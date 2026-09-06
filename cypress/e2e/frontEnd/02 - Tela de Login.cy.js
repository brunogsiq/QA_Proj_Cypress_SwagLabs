/// <reference types="cypress" /> 

var Context = 1
var Describe = 1
var Teste = 1
var Complemento = 0

context(`${++Context} - Tela de Login.`, () =>
{
    describe(`Cenário ${++Describe} - Validação de testes funcionais.`, () =>
    {
        beforeEach(() =>
		{
            cy.visit(Cypress.env("baseUrl"))
		});

        it(`Teste ${++Teste}.${++Complemento} - Validar login inválido - Usuário em branco e Senha em branco.`, () =>
        {
            cy.loginInvalidoSemUsuarioSemSenha()
        })

        it(`Teste ${Teste}.${++Complemento} - Validar login inválido - Usuário inserido e Senha em branco.`, () =>
        {
            cy.loginInvalidoUsuarioSemSenha()
        })

        it(`Teste ${Teste}.${++Complemento} - Validar login inválido - Usuário inserido e Senha inserida.`, () =>
        {
            cy.loginInvalidoUsuarioSenha()
        })

        it(`Teste ${Teste}.${++Complemento} - Validar login inválido - Usuário em branco e Senha inserida.`, () =>
        {
            cy.loginInvalidoSemUsuarioSenha()
        })

        it(`Teste ${Teste}.${++Complemento} - Validar login válido.`, () =>
        {
            cy.loginValido()
        })
    })
})