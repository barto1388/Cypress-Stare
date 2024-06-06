// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//REFORMHAUS
Cypress.Commands.add("login", (email, password) => {

    cy.get('div.email').within(() => {
        cy.get('input#email')
            .type(email);
    })

    cy.get('div.password:visible').within(() => {
        cy.get('input[type="password"]')
            .type(password);
    })

    cy.get('div.choice').within(() => {
        cy.get('input#show-password')
            .click();
    })

    cy.get('div.actions-toolbar').within(() => {
        cy.get('button#send2:visible')
            .click();
    })

})