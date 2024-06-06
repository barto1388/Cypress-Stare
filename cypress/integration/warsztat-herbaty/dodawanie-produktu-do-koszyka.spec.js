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

    it('dodaje produkt do koszyka', () => {

        //skierowanie kursora na element, żeby rozwinąć menu
        cy.get('div.header-top').within(() => {
            cy.get('a[href="https://warsztatherbaty.pl/39-herbaty"]')
                .trigger('mouseover')
                .should('be.visible');
        })

        //wybór rodzaju herbaty
        cy.get('div.popover').within(() => {
            cy.get('a[href="https://warsztatherbaty.pl/23-herbaty-czarne-klasyczne"]')
                .click();
        })

        cy.get('div.products').within(() => {
            cy.get('h3.h3 > a[href="https://warsztatherbaty.pl/herbaty-czarne-klasyczne/86-206-nepal-FTGOP1.html#/25-waga-50g"]')
                .click();                
        })

        //wybór wagi
        cy.get('div.product-variants').within(() => {
            cy.get('input[value="27"]')
                .click()
                .invoke('val')
                .should('eq', '27');                
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

        // cy.get('div.product-quantity').within(() => {
        //     cy.get('input[name="qty"]')
        //         .type('{selectall}{del}3');
        // })

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
            
        //koszyk
        cy.get('div#_desktop_cart').within(() => {
            cy.get('span.hidden-md-down')
                .contains('Koszyk')
                .click();
            })

        cy.get('div.cart_block')
            .should('be.visible')
            .within(() => {
                cy.get('button.btn')
                    .contains('Zobacz Koszyk')
                    .click();
            })
            
        //usuwanie
        cy.get('div.cart-overview').within(() => {
            cy.get('a.remove-from-cart')
                .click();
            })

        //kontynuuj zakupy
        cy.get('div.cart-grid-body').within(() => {
            cy.get('a.label > i.material-icons')
                .click();
            })

    })
})