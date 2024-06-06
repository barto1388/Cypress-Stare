/// <reference types="cypress" />

const url = 'https://release.reformhaus-bacher.de/';
const firstName = 'Jan';
const lastName = 'Kowalski';
const email = 'automation@webvisum.de';
const password = 'Testpassword123';

describe('logowanie', () => {

    it('loguje sie', () => {

        cy.visit(url);

        //wejscie w rejestracje/logowanie
        cy.get('header#page-header').within(() => {
            cy.get('a[title="Ihr Konto"]')
                .click({force:true});
        })

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
                .click()
                .wait(4000);
        })

        cy.get('div.actions-toolbar').within(() => {
            cy.get('button#send2:visible')
                .click();
        })
    })

})