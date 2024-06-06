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

        cy.login(email, password)
    })

    it('dodawanie produktu', () => {

        //przejscie do strony glownej
        cy.get('div.main-header').within(() => {
            cy.get('a.logo')
                .click();
        })

        //wyswietlenie menu
        cy.get('nav.navigation').within(() => {
            cy.get('a#ui-id-2')
                .trigger('mouseover')
                .should('be.visible')
        })

        //wyswietlenie menu
        cy.get('ul.submenu').within(() => {
            cy.get('a#ui-id-11')
                .trigger('mouseover')
                .should('be.visible')
        })

        //wybor kategorii
        cy.get('ul.level1').within(() => {
            cy.get('a#ui-id-30')
                .should('be.visible')
                .click()
        })

        //filtr marka produktu
        cy.get('div#filter_1').within(() => {
            cy.get('div.filter-head')
                .click()
        })

        //rozwinite menu filtra - wyszukiwanie
                cy.get('label.checkboxcontainer').within(() => {
            cy.get('span.filter-attributes')
                .contains('P. Jentschura')
                .click();
        })

        //rozwiniete menu filtra - klikniecie buttona
        cy.get('div.filter-inner').within(() => {
            cy.get('button.filter-apply')
                .contains('Anwenden')
                .click()
                .wait(4000);
        })

        //filtr cenowy
        

        //wybor produktu
        cy.get('div.product-item-info').within(() => {
            cy.get('a[href="https://release.reformhaus-bacher.de/p-jentschura-skalpuro-4260196684347.html"]')
                .contains('SkalPuro basisches Gel zur Reinigung der Kopfhaut')
                .click();
        })

        //wybor ilosci
        cy.get('div.qty').within(() => {
            cy.get('i.fa-caret-up')
                .click();
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

        //wejscie do koszyka (rozwiniete menu)
        cy.get('div.ui-dialog').within(() => {
            cy.get('div#ui-id-110')
                .should('be.visible');
        })

        //wejscie do koszyka
        cy.get('div#ui-id-110').within(() => {
            cy.get('a.viewcart')
                .click({force:true});
        })

        //usuniecie przedmiotu
        cy.get('div.action-delete-refit').within(() => {
            cy.get('a.action-delete')
                .click();
        })
    })

})