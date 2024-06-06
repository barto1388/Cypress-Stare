/// <reference types="cypress" />

const url = 'https://www.google.com/';

describe('wejscie na mape', () => {

    it('wchodzi na mape', () => {
        cy.visit(url);

        cy.get('button[id="L2AGLb"]')
            .click();
        
        cy.get('div.gb_Qd').within(() => {
            cy.get('[href="https://www.google.pl/intl/pl/about/products"]')
                .click();
        })

        cy.get('div.gb_Qd').within(() => {
            cy.get('[href="https://maps.google.pl/maps?hl=pl"]')
                .wait(4000)
                .should('be.visible')
                .click();
        })
    })
})