/// <reference types="cypress" />

const url = 'https://warsztatherbaty.pl/';
const email = 'bartotest1388@gmail.com';
const password = 'Haslohaslo01';

describe('logowanie', () => {

    it('loguje sie', () => {

        cy.visit(url);

        cy.get('div#cookieNotice').within(() => {
            cy.get('span.closeFontAwesome')
                .click();
        })

        cy.get('nav.header-nav').within(() => {
            cy.get('span.hidden-sm-down')
                .click();
            })

        cy.get('section.login-form').within(() => {
            cy.get('input[name="email"]')
                .type(email);
        })

        cy.get('section.login-form').within(() => {
            cy.get('input[name="password"]')
                .type(password);
        })

        cy.get('section.login-form').within(() => {
            cy.get('button.btn')
                .contains('Zaloguj się')
                .click();
        })
    })

    it('dodaje produkty do koszyka', () => {

        //skierowanie kursora na element, żeby rozwinąć menu
        cy.get('div.header-top').within(() => {
            cy.get('a[href="https://warsztatherbaty.pl/39-herbaty"]')
                .trigger('mouseover')
                .should('be.visible');
        })

        //wybór rodzaju herbaty
        cy.get('div.popover').within(() => {
            cy.get('a[href="https://warsztatherbaty.pl/22-herbata-biala-klasyczna"]')
                .click();
        })

        cy.get('div.products').within(() => {
            cy.get('h3.h3 > a[href="https://warsztatherbaty.pl/herbata-biala-klasyczna/280-852-pai-mu-tan.html#/25-waga-50g"]')
                .click();                
        })

        //wybór wagi
        cy.get('div.product-variants').within(() => {
            cy.get('input[value="28"]')
                .click()
                .invoke('val')
                .should('eq', '28');                
        })

         //wybór ilości
         cy.get('div.product-quantity').within(() => {
            cy.get('i.touchspin-up')
                .click();
        })

        cy.get('div.product-quantity').within(() => {
            cy.get('i.touchspin-up')
                .click();
        })

        cy.get('div.product-quantity').within(() => {
            cy.get('button[type="submit"]')
                .click();
        })

        //popup
        cy.get('div.cart-content').within(() => {
            cy.get('button.btn')
                .contains('Kontynuuj zakupy')
                .click();
            })

        //skierowanie kursora na element, żeby rozwinąć menu
        cy.get('div.header-top').within(() => {
            cy.get('a[href="https://warsztatherbaty.pl/40-kawy"]')
                .trigger('mouseover')
                .should('be.visible');
        })

        //wybór rodzaju kawy
        cy.get('div.popover').within(() => {
            cy.get('a[href="https://warsztatherbaty.pl/34-kawy-klasyczne"]')
                .click();
        })

        cy.get('div.products').within(() => {
            cy.get('h3.h3 > a[href="https://warsztatherbaty.pl/kawy-klasyczne/215-737-vietnam-blue-dragon.html#/25-waga-50g/38-mielenie-kawa_ziarnista"]')
                .click();                
        })

        //wybór wagi
        cy.get('div.product-variants').within(() => {
            cy.get('input[value="26"]')
                .click()
                .invoke('val')
                .should('eq', '26');                
        })

        //wybór mielenia
        cy.get('div.product-variants').within(() => {
            cy.get('input[value="33"]')
                .click()
                .invoke('val')
                .should('eq', '33');                
        })

        //wybór ilości
        cy.get('div.product-quantity').within(() => {
            cy.get('input#quantity_wanted')
                .type('{selectall}{del}3');
        })

        cy.get('div.product-quantity').within(() => {
            cy.get('button[type="submit"]')
                .click();
        })

        //popup
        cy.get('div.cart-content').within(() => {
            cy.get('a.btn')
                .contains('Realizuj zamówienie')
                .click();
            })
        
        //usuwanie
        cy.get('div.cart-overview').within(() => {
            cy.get('a[data-id-product="280"]')
                .click();
            })

            cy.get('div.cart-overview').within(() => {
                cy.get('a[data-id-product="215"]')
                    .click();
                })
    })
})