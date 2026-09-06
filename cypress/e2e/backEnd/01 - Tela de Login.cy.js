context('BackEnd', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context(`${contexto} - Tela Login.`, () => 
	{
		let complemento = 1;
		describe(`${cenario} - Regras de negócio e Critérios de aceite.`, () => 
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

			it(`${teste}.${complemento} - Validar acesso ao projeto.`, () => 
			{
				//Passo - Dado que acessei a url do projeto
				//Comando visit

				//Passo - Quando a página carregar

				//Passo - Então o sistema deverá acessar através da url.
				cy.request('/')
                    .its('status')
                    .should('eq', 200);
			});

			it(`${teste}.${complemento} - Validar acesso ao projeto.`, () => 
			{
				//Passo - Dado que acessei a url do projeto
				//Comando visit

				//Passo - Quando a página carregar

				//Passo - Então o sistema deverá acessar através da url.
				cy.request('/')
                    .its('status')
                    .should('eq', 200);
			});
        });
	});
});