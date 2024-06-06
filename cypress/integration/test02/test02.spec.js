/// <reference types="cypress" />

const url = 'https://contsup.serwer.dev/login';

describe ('test 02', () => {
    it('loguje sie', () => {
        cy.visit(url);
        cy.get(':nth-child(2) > .form-control')
            .type('BG');
        cy.get(':nth-child(3) > .form-control')
            .type('bartek1@test.pl');
        cy.get(':nth-child(4) > .form-control')
            .type('Haslohaslo01')
        cy.get('.btn')
            .click();
    })
    it('tworzy fakture korygujaca', () => {
        cy.get(':nth-child(1) > .top-button')
            .click();
        cy.get('.records-documents > [href="#"] > .nav-label')
            .click();
        cy.get('.records-documents > .nav > :nth-child(2) > a')
            .click();
        cy.get('select[name="document_type"]')
            .select('Faktura obca korygująca', { force: true })
            .invoke('val')
            .should('eq', 'foreign_invoice_correction');        
        cy.get('.col-sm-4 > .btn-primary')
            .click();
        cy.get('select[name="corrected_document_id"]')
            .select('TEST/001', {force: true})
            .invoke('val')
            .should('eq', '675');

        cy.get('.sweet-alert.showSweetAlert.visible')
            .get('button.confirm')
            .click()

        cy.get('.form-control[name="document_number"]')
            .type('kor/TEST/001', {force: true});

        cy.get('input[name="date_issued"]')
            .click({force:true});
        cy.get('div.datepicker-days')
            .should('be.visible')
            .within(()=>{
                  cy.contains('Dzisiaj')
                  .click({force: true});
            })
        cy.get('input[name="date_received"]')
            .click({force:true});
        cy.get('div.datepicker-days')
            .should('be.visible')
            .within(()=>{
                  cy.contains('Dzisiaj')
                  .click({force: true});
       
            })

        cy.get('input[name="item_unit_price[0]"]')
            .clear({force:true})
            .click({force:true})
            .type('90', {force: true})
            .should('have.value', '90,00');

        cy.get('select[name="vat_rate_id[0]"]')
            .select('PL: 23.00 %', {force:true})
            .should('contain', 'PL: 23.00 %');

        cy.scrollTo('bottom');
        cy.get('#payments-container > .m-b-sm > :nth-child(4) > .input-group > .input-group-addon')
        //cy.get('input[name="payment_due_date[0]"]')
            .click({force:true})
        cy.get('div.datepicker-days')
            .should('be.visible')
            .within(()=>{
                  cy.contains('Dzisiaj')
                  .click({force: true});
            })
        
        // cy.get('.col-md-8 > .btn.btn-primary.btn-sm.save-option.save-and-close')
        //     .click({force:true});

        cy.get('button')
                  .contains('Zapisz i zamknij')
                  .click()
    })
})