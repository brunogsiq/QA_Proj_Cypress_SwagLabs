/// <reference types="cypress" /> 

import 'cypress-wait-until';

import { telalogin } from '../../pageObjects/elementos';

const Tela_Login = new telalogin();

const Usuarios = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user']

//Validar critérios de aceite.
Cypress.Commands.add('validaVisualizacao_Elementos_TelaLogin', () =>
{
    //Passo - Dado que acessei a url do projeto
    //Comando visit

    //Passo - Quando a página carregar
    cy.waitUntil(() =>
        cy.get('.login_logo')
        .should('be.visible'));

    //Passo - Então o sistema deverá a tela de acordo com o layout da documentação
    Tela_Login.logotipo
        .should('be.visible')
        .and('have.text', 'Swag Labs')
        .and('have.css', 'color', 'rgb(19, 35, 34)');

    Tela_Login.inputUserName
        .should('be.visible')
        .and('have.attr', 'type', 'text')
        .and('have.attr', 'placeholder', 'Username')
        .and('have.css', 'background-color', 'rgb(255, 255, 255)')
        .and('have.css', 'color', 'rgb(72, 76, 85)');

    Tela_Login.inputPassword
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .and('have.attr', 'placeholder', 'Password')
        .and('have.css', 'background-color', 'rgb(255, 255, 255)')
        .and('have.css', 'color', 'rgb(72, 76, 85)');

    Tela_Login.buttonLogin
        .should('be.visible')
        .and('have.attr', 'type', 'submit')
        .and('have.attr', 'value', 'Login')
        .and('have.css', 'background-color', 'rgb(61, 220, 145)')
        .and('have.css', 'color', 'rgb(19, 35, 34)');

    
    Tela_Login.tabelaUsername
        .should('be.visible');
        Tela_Login.tabelaUsername_title
            .should('be.visible')
            .and('have.text', 'Accepted usernames are:')
            .and('have.css', 'color', 'rgb(255, 255, 255)');
            Usuarios.forEach((userOption) => 
            {
                Tela_Login.tabelaUsername
                    .should('contain.text', userOption)
                    .and('have.css', 'color', 'rgb(255, 255, 255)');
            });

    Tela_Login.tabelaPassword
        .should('be.visible')
        .and('contain.text', 'secret_sauce')
        .and('have.css', 'color', 'rgb(255, 255, 255)');
        Tela_Login.tabelaPassword_title
            .should('be.visible')
            .and('have.text', 'Password for all users:')
            .and('have.css', 'color', 'rgb(255, 255, 255)');

    cy.fixture('pass.json').then((data) => 
    {

        Tela_Login.tabelaPassword
            .should('be.visible')
            .and('contain.text', data.password.password)
            .and('have.css', 'color', 'rgb(255, 255, 255)');
            Tela_Login.tabelaPassword_title
                .should('be.visible')
                .and('have.text', 'Password for all users:')
                .and('have.css', 'color', 'rgb(255, 255, 255)');
    });

    cy.fixture('user.json').then((data) => 
    {
        const usernames = Object.values(data.user);
        const password = data.password;

        Tela_Login.tabelaUsername
            .should('be.visible');
            Tela_Login.tabelaUsername_title
                .should('be.visible')
                .and('have.text', 'Accepted usernames are:')
                .and('have.css', 'color', 'rgb(255, 255, 255)');
                usernames.forEach((username) => 
                {
                    Tela_Login.tabelaUsername
                        .should('contain.text', username)
                        .and('have.css', 'color', 'rgb(255, 255, 255)');
                });
    })    
});


Cypress.Commands.add('validaInput_Username', () =>
{
    Tela_Login.inputUserName
        .type(123456);
});

Cypress.Commands.add('validaInput_Password', () =>
{
    Tela_Login.inputPassword
        .type(123456);
});

Cypress.Commands.add('validaButton_Login', () =>
{
    Tela_Login.buttonLogin
        .click();
});

//Validar login inválido - Usuário em branco e Senha em branco
// Cypress.Commands.add('loginInvalidoSemUsuarioSemSenha', () =>
// {
//     cy.get(loc.tLogin.formLogin)
//         .should('be.visible')

//     cy.get(loc.tLogin.btnLogin)
//         .click()

//     cy.get(loc.tLogin.divAlertaLogin)
//         .should('be.visible')
//         .and('have.css', 'color', 'rgb(74, 74, 74)')
//         .and('contain.text', 'Epic sadface: ')
//         .and('contain.text', 'Username is required')

//     cy.get(loc.tLogin.btnAlertLogin)
//         .should('be.visible')
//         .and('have.attr', 'role', 'img')
//         .and('have.css', 'color', 'rgb(255, 0, 0)')
// });

//Validar login inválido - Usuário inserido e Senha em branco.
// Cypress.Commands.add('loginInvalidoUsuarioSemSenha', () =>
// {
//     cy.get(loc.tLogin.formLogin)
//         .should('be.visible')

//     cy.get(loc.tLogin.inpUser)
//         .type('Bruno')

//     cy.get(loc.tLogin.btnLogin)
//         .click()

//     cy.get(loc.tLogin.divAlertaLogin)
//         .should('be.visible')
//         .and('have.css', 'color', 'rgb(74, 74, 74)')
//         .and('contain.text', 'Epic sadface: ')
//         .and('contain.text', 'Password is required')

//     cy.get(loc.tLogin.btnAlertLogin)
//         .should('be.visible')
//         .and('have.attr', 'role', 'img')
//         .and('have.css', 'color', 'rgb(255, 0, 0)')
// });

//Validar login inválido - Usuário inserido e Senha inserida.
// Cypress.Commands.add('loginInvalidoUsuarioSenha', () =>
// {
//     cy.get(loc.tLogin.formLogin)
//         .should('be.visible')

//     cy.get(loc.tLogin.inpUser)
//         .type('Bruno')

//     cy.get(loc.tLogin.inptPass)
//         .type('B12345!')

//     cy.get(loc.tLogin.btnLogin)
//         .click()

//     cy.get(loc.tLogin.divAlertaLogin)
//         .should('be.visible')
//         .and('have.css', 'color', 'rgb(74, 74, 74)')
//         .and('contain.text', 'Username and password do not match any user in this service')

//     cy.get(loc.tLogin.btnAlertLogin)
//         .should('be.visible')
//         .and('have.attr', 'role', 'img')
//         .and('have.css', 'color', 'rgb(255, 0, 0)')
// });

//Validar login inválido - Usuário em branco e Senha inserida.
// Cypress.Commands.add('loginInvalidoSemUsuarioSenha', () =>
// {
//     cy.get(loc.tLogin.formLogin)
//         .should('be.visible')

//     cy.get(loc.tLogin.inptPass)
//         .type('B12345!')

//     cy.get(loc.tLogin.btnLogin)
//         .click()

//     cy.get(loc.tLogin.divAlertaLogin)
//         .should('be.visible')
//         .and('have.css', 'color', 'rgb(74, 74, 74)')
//         .and('contain.text', 'Username is required')

//     cy.get(loc.tLogin.btnAlertLogin)
//         .should('be.visible')
//         .and('have.attr', 'role', 'img')
//         .and('have.css', 'color', 'rgb(255, 0, 0)')
// });

//Validar login válido.
// Cypress.Commands.add('loginValido', () =>
// {
//     cy.get(loc.tLogin.formLogin)
//         .should('be.visible')

//     cy.get(loc.tLogin.inpUser)
//         .type('standard_user')

//     cy.get(loc.tLogin.inptPass)
//         .type('secret_sauce')

//     cy.get(loc.tLogin.btnLogin)
//         .click()

//     cy.get(loc.tProducts.divTitleProd)
//         .should('be.visible')
//         .and('contain.text', 'Products')
// });

/*
cy.session(name, () => {
    cy.visit('/login')
    cy.get('[data-test=name]').type(name)
    cy.get('[data-test=password]').type('s3cr3t')
    cy.get('form').contains('Log In').click()
    cy.url().should('contain', '/login-successful')
})
*/

///Validar login válido - Sesion.
// Cypress.Commands.add('loginValidoSesion',
// ({
//     user = Cypress.env('user_name'),
//     password = Cypress.env('user_password'),
//     cacheSession = true
// }) =>
// {
//     const loginValidoSesion = () =>
//     {
//         cy.visit(Cypress.env("baseUrl"))

//         cy.get(loc.tLogin.formLogin)
//             .should('be.visible')

//         cy.get(loc.tLogin.inpUser)
//             .type(user)

//         cy.get(loc.tLogin.inptPass)
//             .type(password, { log: false })

//         cy.get(loc.tLogin.btnLogin)
//             .click()
//     }
//     const options =
//     {
//         cacheAcrossSpecs: true,
//     }
//     if (cacheSession)
//     {
//         cy.session(user, loginValidoSesion, options)
//     }
//     else
//     {
//         loginValidoSesion()
//     }
// })