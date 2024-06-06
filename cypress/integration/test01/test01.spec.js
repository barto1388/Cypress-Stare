/// <reference types="cypress" />
const url = 'http://localhost:3000/';

describe ('Moj test 01', () => {
    it('add todo', () => {
        cy.visit(url);
        cy.get('input[class=new-todo]')
            .type('dupa{enter}');
        cy.get('label').should('contain', 'dupa');
        cy.get('ul > li:nth-child(0) > hidden')
            .invoke('show')
            .click()
    })
})