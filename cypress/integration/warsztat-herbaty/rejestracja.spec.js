/// <reference types="cypress" />

const url = 'https://warsztatherbaty.pl/';
const name = 'Jan';
const lastName = 'Kowalski';
const email = 'bartotest1388@gmail.com';
const password = 'Haslohaslo01';
const date = '1970-05-31'

describe('rejestracja', () => {

    it('rejestruje uzytkownika', () => {
        cy.visit(url);

        cy.get('div#cookieNotice').within(() => {
            cy.get('span.closeFontAwesome')
                .click();
        })

        cy.get('nav.header-nav').within(() => {
            cy.get('span.hidden-sm-down')
                .click();
            })

        cy.get('div.no-account').within(() => {
            cy.get('[href="https://warsztatherbaty.pl/logowanie?create_account=1"]')
                .contains('Nie masz konta? Załóż je tutaj')
                .click();
            })

        cy.get('section.register-form').within(() => {
            cy.get('span.custom-radio > input[value="1"]')
                .click()
                .invoke('val')
                .should('eq', '1')
            })

        cy.get('section.register-form').within(() => {
            cy.get('input[name="firstname"]')
                .type(name);
            })

        cy.get('section.register-form').within(() => {
            cy.get('input[name="lastname"]')
                .type(lastName);
            })

        cy.get('section.register-form').within(() => {
            cy.get('input[name="email"]')
                .type(email);
            })

        cy.get('section.register-form').within(() => {
            cy.get('input[name="password"]')
                .type(password);
            })

        cy.get('section.register-form').within(() => {
            cy.get('input[name="birthday"]')
                .type(date);
            })

        cy.get('section.register-form').within(() => {
            cy.get('span.custom-checkbox > input[name="psgdpr"]')
                .click()
                .invoke('val')
                .should('eq', '1')
            })

        cy.get('section.register-form').within(() => {
            cy.get('button.btn')
                .contains('Zapisz')
                .click();
                cy.wait(10000)
        })
    })
})