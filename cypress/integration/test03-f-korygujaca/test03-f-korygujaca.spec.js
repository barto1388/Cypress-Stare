/// <reference types="cypress" />

const url = 'https://contsup.serwer.dev/login';
const firma = 'autotest';
const email = 'bl@silprojects.pl';
const haslo = 'haslo987ab';

describe ('test03-f-korygujaca', () => {
    it('loguje sie', () => {
        cy.visit(url);
        cy.get('.form-control[name="company"]')
            .type(firma);
        cy.get('.form-control[name="email"]')
            .type(email);
        cy.get('.form-control[name="password"]')
            .type(haslo);
        cy.get('button')
            .click();
    })

    // it('sprawdza czy pojawiaja sie komunikaty o bledzie', () => {
    //     cy.get('div.btn-group > [data-submenu="records"]')
    //         .click();
    //     cy.get('.records-documents > [href="#"] > .nav-label')
    //         .click();
    //     cy.get('.records-documents > .nav > :nth-child(2)')
    //         .click();
    //     cy.get('select[id="redirect-menu"]')
    //         .select('Faktura obca korygująca', {force: true});
    //     cy.get('.col-sm-4 > .btn-primary')
    //         .click();
            
    //     cy.get('div.col-md-3 > [id="select2-corrected_document_id-ra-container"]')
    //         .select('F001; AAA', {force: true});
    // })

        it('tworzy fakture obca', () => {
            cy.get('div.btn-group > [data-submenu="records"]')
                .click();
            cy.get('.records-documents > [href="#"] > .nav-label')
                .click();
            cy.get('.records-documents > .nav > :nth-child(2)')
                .click();
            cy.get('select[id="redirect-menu"]')
                .select('Faktura obca', {force: true});
            cy.get('.col-sm-4 > .btn-primary')
                .click();


            cy.get('input[name="document_number"]')
                .click({force: true})
                .type('T-RRRRMMDD-01');

                //kalendarz
           

            // cy.get('i.fa-calendar:visible').eq(0).click({force: true})

        
            // cy.get('div.datepicker-days')
            //     .should('be.visible')
            //     .within(()=>{
            //         cy.contains('Dzisiaj')
            //         .click({force: true});
            //     });

            // cy.get('i.fa-calendar:visible').eq(1).click({force: true})

            // cy.get('div.datepicker-days')
            // .should('be.visible')
            // .within(()=>{
            //     cy.contains('Dzisiaj')
            //     .click({force: true});
            // });

            // cy.get('i.fa-calendar:visible').eq(2).click({force: true})

            // cy.get('div.datepicker-days')
            // .should('be.visible')
            // .within(()=>{
            //     cy.contains('Dzisiaj')
            //     .click({force: true});
            // });

            // cy.get('div.dates-form').within(() => {
            //     cy.get('span.input-group-addon').each(($el, i, $list) => {
            //         cy.get('span.input-group-addon').eq(i).click({force: true}).trigger('change', {force: true})
            //         cy.wait(1000)
            //         cy.get('.datepicker').eq(i)
            //         .within(()=>{
            //             cy.contains('Dzisiaj')
            //             .click({force: true})
            //         });
            //     })
            // })


            cy.get('input[name="date_issued"]')
                .click({force:true});
            cy.get('div.datepicker-days:visible')//.eq(0)
                .should('be.visible')
                .within(()=>{
                    cy.contains('Dzisiaj')
                    .click({force: true})
                    .wait(1000)
                });

            cy.get('input[name="sale_date"]')
                .click({force:true});
            cy.get('div.datepicker-days:visible') //.eq(1)
                .should('be.visible')
                .within(()=>{
                    cy.contains('Dzisiaj')
                    .click({force: true})
                    .wait(1000)
                });

            cy.get('input[name="date_received"]')
                .click({force:true});
            cy.get('div.datepicker-days:visible') //.eq(2)
                .should('be.visible')
                .within(()=>{
                    cy.contains('Dzisiaj')
                    .click({force: true});
                });
            
            //wybor kontrahenta
            cy.get('div.form-group').within(() => {
                cy.get('span#select2-contractor_name-container')
            })
        })

})