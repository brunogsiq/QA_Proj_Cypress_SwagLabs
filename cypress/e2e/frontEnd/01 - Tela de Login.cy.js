/// <reference types="cypress" /> 

context('FrontEnd - Tela Login', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context(`${contexto} - Regras de Negócio e Critério de Aceite.`, () => 
	{
		let complemento = 1;
		describe(`${cenario} - Validações de acesso .`, () => 
		{
			//Se houver
			beforeEach(() =>
			{
				//Executa antes de cada it
				cy.visit('/');
			});

			//Se houver
			afterEach(() =>
			{
				//Executa depois de cada it
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			it.skip(`${teste}.${complemento} - Validar url do projeto.`, () => 
			{
				//Passo - Dado que acessei a url do projeto
				//Comando visit

				//Passo - Quando a página carregar
				cy.waitUntil(() =>
					cy.get('.login_logo')
					.should('be.visible'));

				//Passo - Então o sistema deverá acessar através da url.
				cy.url().should('eq', 'https://www.saucedemo.com/')
			});

			it.skip(`${teste}.${++complemento} - Validar acesso ao projeto.`, () => 
			{
				//Passo - Dado que acessei a url do projeto
				//Comando visit

				//Passo - Quando a página carregar
				cy.waitUntil(() =>
					cy.get('.login_logo')
					.should('be.visible'));

				//Passo - Então o sistema deverá apresentar o logotipo
				Tela_Login.logotipo
					.should('be.visible')
					.and('have.text', 'Swag Labs');
			});
		});

		describe(`${cenario} - Validações visual + comportamento .`, () => 
		{
			//Se houver
			beforeEach(() =>
			{
				//Executa antes de cada it
				cy.visit('/');
			});

			//Se houver
			afterEach(() =>
			{
				//Executa depois de cada it
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			it.only(`${teste}.${complemento} - Validar visualização dos elementos da página.`, () =>
			{
				cy.validaVisualizacao_Elementos_TelaLogin();
			});

			it.skip(`${teste}.${complemento} - Validar comportamento do input Username.`, () =>
			{
				cy.validaInput_Username();
			});

			it.skip(`${teste}.${complemento} - Validar comportamento do input Password.`, () =>
			{
				cy.validaInput_Password();
			});

			it.skip(`${teste}.${complemento} - Validar comportamento do button Login.`, () =>
			{
				cy.validaButton_Login();
			});

			////

			it.skip('Negativos rápidos: vazio, só espaço e senha errada', () => {
				// vazio
				cy.get('#login-button').click()
				cy.get('[data-test="error"]').should('contain.text', 'Username is required')

				// só espaço no usuário
				cy.reload()
				cy.get('#user-name').type(' ')
				cy.get('#password').type('secret_sauce')
				cy.get('#login-button').click()
				cy.get('[data-test="error"]').should('be.visible')

				// senha errada
				cy.reload()
				cy.get('#user-name').type('standard_user')
				cy.get('#password').type('wrong')
				cy.get('#login-button').click()
				cy.get('[data-test="error"]').should('contain.text', 'do not match')
			})

			it.skip('Login OK com standard_user', () => {
				cy.get('#user-name').type('standard_user')
				cy.get('#password').type('secret_sauce')
				cy.get('#login-button').click()
				cy.url().should('include', '/inventory.html')
				// exemplo de sanidade na inventory
				cy.get('.inventory_it.skipem').should('have.length.greaterThan', 0)
			})

			it.skip('Login bloqueado com locked_out_user', () => {
				cy.get('#user-name').type('locked_out_user')
				cy.get('#password').type('secret_sauce')
				cy.get('#login-button').click()
				cy.get('[data-test="error"]').should('contain.text', 'Sorry, this user has been locked out')
			})
		});
	});

	context(`${++contexto} - End To End.`, () => 
	{
		let complemento = 1;
		describe(`${++cenario} - Fluxos Funcionais`, () => 
		{
			//Se houver
			beforeEach(() =>
			{
				//Executa antes de cada it.skip
			});

			//Se houver
			afterEach(() =>
			{
				//Executa depois de cada it
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			it.skip(`${++teste}.${complemento} - `, () => 
			{
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...
				
			});

			it.skip(`${teste}.${++complemento} - `, () => 
			{
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...
				
			});
		});
	});
});