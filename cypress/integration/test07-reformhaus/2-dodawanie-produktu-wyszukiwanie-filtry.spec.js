/// <reference types="cypress" />

const url = 'https://release.reformhaus-bacher.de/';
const firstName = 'Jan';
const lastName = 'Kowalski';
const email = 'automation@webvisum.de';
const password = 'Testpassword123';

describe('dodawanie produktu do koszyka', () => {

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
                .click();
        })

        cy.get('div.actions-toolbar').within(() => {
            cy.get('button#send2:visible')
                .click();
        })
    })

    it('dodawanie produktu', () => {

        //przejscie do strony glownej
        cy.get('div.main-header').within(() => {
            cy.get('a.logo')
                .click();
        })

        //wpisanie produktu w wyszukiwarke
        cy.get('div.main-inner').within(() => {
            cy.get('input#search')
                .type('SkalPuro basisches Gel zur Reinigung der Kopfhaut', {force:true})
                .wait(4000);
        })

        //click w button
        cy.get('div.actions').within(() => {
            cy.get('button.action').within(() => {
                cy.get('span')
                    .contains('Suche')
                    .click({force:true});
            })    
        })

        //wybor produktu
        cy.get('div.product-item-info').within(() => {
            cy.get('a[href="https://release.reformhaus-bacher.de/p-jentschura-skalpuro-4260196684347.html"]')
                .contains('SkalPuro basisches Gel zur Reinigung der Kopfhaut')
                .click();
        })

        //wybor ilosci
        cy.get('div.qty').within(() => {
            cy.get('input#qty')
                .type('{selectall}{del}3');
        })

        //dodanie do koszyka
        cy.get('div.actions').within(() => {
            cy.get('button#product-addtocart-button')
                .click();
        })

        //wejscie do koszyka (klikniecie ikony)
        cy.get('div.minicart-wrapper').within(() => {
            cy.get('i.icon-cart')
                .click();
        })

        
    })

})