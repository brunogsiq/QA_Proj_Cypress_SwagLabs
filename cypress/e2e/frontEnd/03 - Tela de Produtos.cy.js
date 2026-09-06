/// <reference types="cypress" /> 

import loc from "../support/locators"

var Context = 2
var Describe = 2
var Teste = 2
var Complemento = 0

context(`${++Context} - Tela de Produtos.`, () =>
{
    describe(`Cenário ${++Describe} - Validação de rotas e critérios de aceite.`, () =>
    {
        beforeEach(() =>
		{
            const user = Cypress.env('user_name')
            const password = Cypress.env('user_password')
            const options = { cacheSession: false }

            cy.loginValidoSesion({user, password, options})
		});


		it(`Teste ${++Teste}.${++Complemento} - Validar acesso ao projeto.`, () =>
		{
            cy.get(loc.tProducts.btnFilter)
                .should('be.visible')
		})

		it(`Teste ${Teste}.${++Complemento} - Validar url do projeto.`, () =>
		{
			cy.validaUrlTelaProducts()
		})

		it(`Teste ${Teste}.${++Complemento} - Validar status com sucesso ao acessar o projeto.`, () =>
		{
			cy.validaStatusTelaProducts()
		})

		it(`Teste ${Teste}.${++Complemento} - Validar critérios de aceite.`, () =>
		{
			cy.validaCriteriosDeAceiteTelaProducts()
		})
    });
});