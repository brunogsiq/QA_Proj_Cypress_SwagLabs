/// <reference types='cypress' /> 

import 'cypress-file-upload';
import 'cypress-real-events/support';
import 'cypress-wait-until'
import './pageObjects/elementos';
import './commands/settings_commands';
import './commands/01_Tela_Login/commandsLogin'
import './commands/02_Tela_Produtos/commandsProduto'

//Determinada prioridade de seletores
Cypress.ElementSelector.defaults({
    selectorPriority: ['data-cy', 'data-test', 'data-testid', 'id', 'class', 'attributes', 'tag', 'nth-child'],
});

//Esse código faz o Cypress “fechar os olhos” para qualquer erro JavaScript inesperado (uncaught) que a aplicação jogue no console.
Cypress.on('uncaught:exception', (err) => {
    // Ignora apenas erros de scripts externos (exemplo)
    if (err.message.includes('ResizeObserver loop limit exceeded'))
    {
        return false; // ignora esse erro conhecido
    }

    // Para qualquer outro erro, o teste falha normalmente
    return true;
});

// Oculta logs de requisições XHR e fetch no painel de comandos do Cypress
if (Cypress.config("hideXHRInCommandLog"))
{
    const app = window.top;

    if (app && !app.document.head.querySelector("[data-hide-command-log-request]"))
    {
        const style = app.document.createElement("style");
        style.innerHTML = ".command-name-request, .command-name-xhr { display: none }";
        style.setAttribute("data-hide-command-log-request", "");
        app.document.head.appendChild(style);
    };
};