/// <reference types="cypress" />

const url = 'https://release.reformhaus-bacher.de/';
const firstName = 'Jan';
const lastName = 'Kowalski';
const email = 'bartotest1388@gmail.com';
const password = 'Haslohaslo01';


describe('rejestracja', () => {

    it('rejestruje sie', () => {

        cy.visit(url);

        //wejscie w rejestracje/logowanie
        cy.get('header#page-header').within(() => {
            cy.get('a[title="Ihr Konto"]')
                .click({force:true});
        })

        //wybor rejestracji
        cy.get('div.block-new-customer').within(() => {
            cy.get('a.create')
                .click();
        })

        //imie
        cy.get('div.field-name-firstname').within(() => {
            cy.get('input#firstname')
                .type(firstName);
        })

        //nazwisko
        cy.get('div.field-name-lastname').within(() => {
            cy.get('input#lastname')
                .type(lastName);
        })

        //email
        cy.get('div.field').within(() => {
            cy.get('input#email_address')
                .type(email);
        })

        //haslo
        cy.get('div.password ').within(() => {
            cy.get('input#password')
                .type(password);
        })

        //powtorz haslo
        cy.get('div.confirmation').within(() => {
            cy.get('input#password-confirmation')
                .type(password);
        })

        //pokaz haslo
        cy.get('div.choice').within(() => {
            cy.get('input#show-password')
                .click();
        })

        //button
        cy.get('div.actions-toolbar').within(() => {
            cy.get('button[title="Ein Konto erstellen"]')
                .click();
        })

    })

})