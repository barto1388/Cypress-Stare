/// <reference types="cypress" />

const url = 'https://contsup.serwer.dev/login';

describe ('test03-f-korygujaca', () => {
    it('loguje sie', () => {
        cy.visit(url);
        cy.get('.form-control[name="company"]')
            .type('autotest ');
        cy.get('.form-control[name="email"]')
            .type('bl@silprojects.pl');
        cy.get('.form-control[name="password"]')
            .type('haslo987ab');
        cy.get('button')
            .click();
    })

    it('tworzy uzytkownika', () => {
       
    })


})