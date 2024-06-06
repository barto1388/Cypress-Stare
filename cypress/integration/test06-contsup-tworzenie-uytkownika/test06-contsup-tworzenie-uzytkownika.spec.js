/// <reference types="cypress" />

const url = 'https://contsup.serwer.dev/login';
const firma = 'autotest';
const email = 'bl@silprojects.pl';
const haslo = 'haslo987ab';
const lastName = 'Kowalski';
const firstName = 'Jan';
const mail = 'test@mail.pl';
const password = 'Haslohaslo01';
const phoneNumber = '100200300';

describe('tworzenie uzytkownika', () => {


    it('logowanie', () => {
        cy.visit(url);

        cy.get('.form-control[name="company"]')
            .type(firma);
        cy.contains('Pole Firma jest wymagane.')
            .should('not.exist');

        cy.get('.form-control[name="email"]')
            .type(email);
        cy.contains('Pole E-mail jest wymagane.')
            .should('not.exist');

        cy.get('.form-control[name="password"]')
            .type(haslo);
        cy.contains('Pole Hasło jest wymagane.')
            .should('not.exist');

        cy.get('button')
            .click();
    })

    it('tworzenie użytkownika', () => {
        cy.get('div.navbar-header').within(() => {
            cy.get('[name="settings_btn"]')
                .contains('Ustawienia')
                .click();
        })

        cy.get('nav.navbar-default').within(() => {
            cy.get('span.nav-label')
                .contains('Działy i użytkownicy')
                .should('be.visible')
                .click();
        })
        
        cy.get('nav.navbar-default').within(() => {
            cy.get('a[href="https://contsup.serwer.dev/admin/users/create"]')
                .contains('Dodaj nowego użytkownika')
                .should('be.visible')
                .click();
        })

        //okno tworzenia uzytkownika

        //nazwisko
        cy.get('div.ibox-content').within(() => {
            cy.get('input[name="surname"]')
                .click({force: true})
                .type(lastName);
        })

        //imie
        cy.get('div.ibox-content').within(() => {
            cy.get('input[name="name"]')
                .click({force: true})
                .type(firstName);
        })

        //mail
        cy.get('div.ibox-content').within(() => {
            cy.get('input[name="email"]')
                .click({force: true})
                .type(mail);
        })

        //haslo
        cy.get('div.ibox-content').within(() => {
            cy.get('input[name="password"]')
                .click({force: true})
                .type(password);
        })

        //telefon
        cy.get('div.ibox-content').within(() => {
            cy.get('input[name="phone"]')
                .click({force: true})
                .type(phoneNumber);
        })

        //typ
        cy.get('div.ibox-content').eq(0).within(() => {
            cy.get('select[name="role"]')
                .select('Użytkownik', {force: true})
                .invoke('val')
                .should('eq', 'user');
                
        })

        //status
        cy.get('div.ibox-content').eq(0).within(() => {
            cy.get('select[name="status"]')
                .select('Aktywny', {force: true})
                .invoke('val')
                .should('eq', 'active');
        })

        //uprawnienia
        cy.get('div#specials_box').within(() => {
            cy.get('input[data-permission="contractors_preview"]')
                .click()
                .invoke('val')
                .should('eq', '19');
        })

        cy.get('div#specials_box').within(() => {
            cy.get('input[data-permission="preview_foreign_documents;preview_own_documents;preview_proforma_documents;preview_of_working_documents;downloading_documents_files"]')
                .click()
                .invoke('val')
                .should('eq', '22');
        })
        
        cy.get('div#specials_box').within(() => {
            cy.get('input[data-permission="list_of_incorrect_payments_and_returns;currency_exchanges_list;payment_source_list;operation_preview"]')
                .click()
                .invoke('val')
                .should('eq', '29');
        })

        //uprawnienia administracyjne
        cy.get('div#administrative_box').within(() => {
            cy.get('input[value="153"]')
                .click()
                .invoke('val')
                .should('eq', '153');
        })

        cy.get('input[type="submit"]')
            .click()
            .invoke('val')
            .should('eq', 'Zapisz');
    })
})