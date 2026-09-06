/// <reference types="cypress" /> 

var Context = 3
var Describe = 3
var Teste = 3
var Complemento = 0

context(`${++Context} - Tela de Produtos.`, () =>
{
    describe(`Cenário ${++Describe} - Validação de testes funcionais.`, () =>
    {
        beforeEach(() =>
		{
			const user = Cypress.env('user_name');
			const password = Cypress.env('user_password');
		
			cy.loginValidoSesion(user, password);
		});

		it(`Teste ${++Teste}.${++Complemento} - Valida abertura e fechamento do menu lateral..`, () =>
		{
			cy.validaAberturaMenuLateral()
		})
    });
});