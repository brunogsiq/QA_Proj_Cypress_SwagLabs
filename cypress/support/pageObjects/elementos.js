export class telalogin
{
    get logotipo() {
        return cy.get('.login_logo')
    };

    get formulario() {
        return cy.get('.login_button_container')
    };

    get inputUserName () {
        return cy.get('[data-test="username"]')
    };

    get inputPassword() {
        return cy.get('[data-test="password"]')
    };

    get buttonLogin() {
        return cy.get('[data-test="login-button"]')
    };

    get tabelaUsername () {
        return cy.get('[data-test="login-credentials"]')
    };

    get tabelaUsername_title () {
        return cy.get('[data-test="login-credentials"] > h4')
    }

    get tabelaPassword () {
        return cy.get('[data-test="login-password"]')
    };

    get tabelaPassword_title() {
        return cy.get('[data-test="login-password"] > h4')
    }
};