/// <reference types="cypress" />

const url = 'https://blendee.app/login';
const mail = 'bartek2@test.pl';
const password = 'Haslohaslo01';

describe('dodawanie audycji', () => {

    it('logowanie', () => {
        cy.visit(url);

        cy.get('input[id="login"]')
            .type(mail);
        cy.contains('Podaj login')
            .should('not.exist');

        cy.get('input[id="password"]')
            .type(password);
        cy.contains('Podaj hasło')
            .should('not.exist');

        cy.get('input[id="remember"]')
            .click();

        cy.get('button[type="submit"]')
            .contains('Zaloguj się')
            .click();
    })

    it('dodaje audycję', () => {
        
        cy.get('div.sidebar ').within(() => {
            cy.get('[href="/programs"]')
            .click();
        })

        cy.get('div.sc-eltcbb').within(() => {
            cy.get('[href="/programs/category/muzyka"]')
            .click();
        })

        //'wczytaj wiecej'

        cy.get('button[type="button"]')
            .contains('Wczytaj więcej')
            .click();
        
        cy.get('button[type="button"]')
            .contains('Wczytaj więcej')
            .click();

        cy.get('button[type="button"]')
            .contains('Wczytaj więcej')
            .click();

        cy.get('button[type="button"]')
            .contains('Wczytaj więcej')
            .click();

        
//wejscie w opis audycji

        cy.get('.sc-fFubgz').within(() => {
            cy.get('[href="/programs/element/caly-ten-jazz"]')
                .click();
        })

        cy.get('button[type="button"]')
            .contains('Dodaj do moje radio')
            .click();
        
        cy.get('div.sc-jrAGrp')
            .should('be.visible');

//pojawia sie popup z wyborem dni

        cy.get('div[id="modal-root"]').within(() => {
            cy.get('button')
            .contains('Dodaj do moje radio')
            .click();
        })

//wejscie do moje radio i usuniecie audycji

        cy.get('div.sidebar').within(() => {
            cy.get('[href="/my-radio"]')
            .click();
        })

        cy.get(':nth-child(3) > .sc-hiSbYr > .sc-gWHgXt > .sc-cBNfnY')
            .click();

        cy.get('div.sc-iqHYGH')
            .should('be.visible');

        cy.get('button.sc-gsTCUz')
            .contains('Usuń wybrane')
            .click();
    })
})