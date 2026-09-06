/// <reference types="cypress" /> 

import 'cypress-wait-until'

//Validar url do projeto.
Cypress.Commands.add('validaUrlTelaProducts', () =>
{
    cy.url()
        .should('eq', 'https://www.saucedemo.com/v1/inventory.html')
});

//Validar status com sucesso ao acessar o projeto.
Cypress.Commands.add('validaStatusTelaProducts', () =>
{
    cy.request("https://www.saucedemo.com/v1/inventory.html")
        .its('status')
        .should('eq', 200)
});

//Validar critérios de aceite.
Cypress.Commands.add('validaCriteriosDeAceiteTelaProducts', () =>
{
    cy.get(loc.tProducts.btnOpenMenu)
        .should('be.exist')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('contain.text', 'Open Menu')
});

//Valida abertura do menu lateral.
Cypress.Commands.add('validaAberturaMenuLateral', () =>
{
    cy.waitUntil(() => 
        cy.get(loc.tProducts.btnOpenMenu)
            .should('be.exist'))

    cy.get(loc.tProducts.btnOpenMenu)
        .click()

    cy.get(loc.tMenuLat.divMenuLat)
        .should('be.visible')

    cy.get(loc.tMenuLat.optAllItems)
        .should('be.visible')

    cy.get(loc.tMenuLat.btnCloseMenu)
        .should('be.visible')

    cy.get(loc.tMenuLat.btnCloseMenu)
        .click()

    cy.get(loc.tMenuLat.divMenuLat)
        .should('not.be.visible')

    cy.get(loc.tMenuLat.optAllItems)
        .should('not.be.visible')
});