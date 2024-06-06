/// <reference types="cypress" />

const url = 'https://warsztatherbaty.pl/';
const email = 'bartotest1388@gmail.com';
const password = 'Haslohaslo01';

describe('logowanie', () => {

    it('loguje sie', () => {

        cy.visit(url);

        cy.get('div#cookieNotice').within(() => {
            cy.get('span.closeFontAwesome')
                .click();
        })

        cy.get('nav.header-nav').within(() => {
            cy.get('span.hidden-sm-down')
                .click();
            })

        cy.get('section.login-form').within(() => {
            cy.get('input[name="email"]')
                .type(email);
        })

        cy.get('section.login-form').within(() => {
            cy.get('input[name="password"]')
                .type(password);
        })

        cy.get('section.login-form').within(() => {
            cy.get('button.btn')
                .contains('Zaloguj się')
                .click();
        })
    })
})