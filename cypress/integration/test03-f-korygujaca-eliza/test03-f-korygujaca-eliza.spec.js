/// <reference types="cypress" />
const company = "autotest";
const email = "bl@silprojects.pl";
const password = "haslo987ab";
const contractorName = "CCC";
const serviceName = "Towar 1";
const price = "100,00";
const nrb = "PL16124042721111001068581036";
const country = "Polska";
const zipCode = "22-222";
const type = "NIP";
const idNumber = "3456789012";
const quantity = "1,00";
const vatRate = "PL: 23.00 %" ;
const vatAmount = "23,00";
const grossValue = "123,00";
const settlement = "XX: 100% rozliczenie";
const netAmount = "100,00";
const refund = "23,00";
const corr = "0,00";

let date = new Date();
describe('Test 1', () => {

   //DATE
   let day = date.getDate();
   let year = date.getFullYear();
   var month = date.getMonth()+1;
   let hour = date.getHours();
   let minute = date.getMinutes();
   let sec = date.getSeconds();
   let monthStr = month.toString();
     if (month < 10) {
       monthStr = '0' + month;
     }
     if(day<10) {
      day = '0'+day
      }
   let invoiceNumber = "T-" + year + monthStr + day + hour + minute + sec +  "-1";
   invoiceNumber = invoiceNumber.toString();

   //DATE WEEK
      
   let someDate = new Date();
   let numberOfDaysToAdd = 7;
   someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
   let dd = someDate.getDate();
   let mm = someDate.getMonth()+1;
   let yyyy = someDate.getFullYear();
   if(dd<10) {
   dd = '0'+dd
   }
   if(mm<10) {
   mm = '0'+mm
   }
  let today = yyyy + '-' + mm + '-' + dd;


    it('Logowanie', () => {
      cy.visit('');
      cy.login(company, email, password);
      cy.logout();
  })

      it('Faktura korygująca sprawdzenie', () => {

      cy.visit('');
      cy.login(company, email, password);
  
      cy.get('div.navbar-header').within(() => {
            cy.get('button').contains('ewidencja')
                  .click()
                })

      cy.get('div.sidebar-collapse').within(() => {
            cy.get('a > span.nav-label')
                  .contains('Dokumenty')
                  .should('be.visible')
                  .click()
                 })
      cy.get('ul.nav-second-level').within(() => {
            cy.get('li> a')
                  .contains('Dodaj nowy dokument')
                  .should('be.visible')
                  .click()
                 })
      cy.get('select[name="document_type"]')
                  .select('Faktura obca korygująca', { force: true })
                  .invoke('val')
                  .should('eq', 'foreign_invoice_correction')
               
      cy.get('button')
                  .contains('Dalej')
                  .click()
       
      cy.get('select[name="corrected_document_id"]')
                  .select('F001', { force: true })
                  .invoke('val')
                  .should('eq', '1')
       
      cy.wait(1000)

      cy.contains('Faktura korygowana i/lub wcześniejsza faktura korygująca do faktury korygowanej nie została zablokowana do edycji')
                  .should('be.visible')
                  .wait(1000)
      cy.get('.confirm')
                  .click({force: true})
       
      cy.get('.select2-selection__arrow')
                  .contains('F002')
                  .should('not.exist')
       
      cy.get('.select2-selection__arrow')
                  .contains('F003')
                  .should('not.exist')
       
      cy.get('select[name="corrected_document_id"]')
                  .select('F004', { force: true })
                  .invoke('val')
                  .should('eq', '4')
       
      cy.wait(1000)
       
      cy.contains('Faktura korygowana i/lub wcześniejsza faktura korygująca do faktury korygowanej nie została zablokowana do edycji')
                  .should('be.visible')
      cy.get('button.confirm')
                  .click({force:true})
             
      cy.contains('Dodaj nową fakturę obcą korygującą')
                  .should('be.visible')
               
      cy.get('select[name="corrected_document_id"]')
                  .eq(0)
                  .should('contain', 'F004')
                  .should('have.attr', 'readonly')
       
      cy.get('select[name="contractor_id"]')
                  .should('contain', 'AAA')
                  .should('have.attr', 'readonly') 
       
      cy.get('select[name="id_number"]')
                  .should('contain', '1234567890')
                  .should('have.attr', 'readonly')
       
      cy.get('label > input[name="employee_expenses"]')
                  .should('be.checked')

      cy.logout();
          })



it('Faktura obca', () => { 
      cy.visit('');
      cy.login(company, email, password);

      cy.get('div.navbar-header').within(() => {
            cy.get('button').contains('ewidencja')
                  .click()
                })

      cy.get('div.sidebar-collapse').within(() => {
            cy.get('a > span.nav-label')
                  .wait(1000)
                  .contains('Dokumenty')
                  .click()
                  .should('be.visible')      
                })

      cy.wait(1000)

      cy.get('ul.nav-second-level').within(() => {
            cy.get('li> a')
                  .contains('Dodaj nowy dokument')
                  .should('be.visible')
                  .click()
                })
        
      cy.wait(1000)

       //Zakomentowane z powodu błędu logowania

      // cy.contains('Opuszczasz ekran bez zapisania zmian')
      //             .should('be.visible')
      // cy.get('.confirm')
      //             .contains('Potwierdź')
      //             .click()

      cy.get('select[name="document_type"]')
                  .select('Faktura obca', { force: true })
                  .invoke('val')
                  .should('eq', 'foreign_invoice')
        
      cy.get('button')
                  .contains('Dalej')
                  .click({force:true})
        
      cy.contains('Dodaj nową fakturę obcą')
                  .should('be.visible')
        
      cy.get('input[name="document_number"]')
                  .click({force: true})
                  .type(invoiceNumber, {force: true})
                
      cy.get('input[name="date_issued"]')
                  .click({force:true})
          
      //CURRENT DATE
        
                  let currentNewDate = new Date();
                  let mm = currentNewDate.getMonth()+1;
                  let yyyy = currentNewDate.getFullYear();
                  let currentDay = currentNewDate.getDate();
                  if(currentDay<10) {
                        currentDay = '0'+currentDay
                        }
                  if(mm<10) {
                  mm = '0'+mm
                  }
                  let currentDate =  yyyy + '-' + mm + '-' + currentDay;    
        
      cy.get('div.datepicker-days')
                  .should('be.visible')
                  .within(()=>{
                        cy.contains('Dzisiaj')
                        .click({force: true})
                  })
                
      cy.get('input[name="date_received"]')
                  .click({force:true})
                      
      cy.get('div.datepicker-days')
                  .should('be.visible')
                  .within(()=>{
                        cy.contains('Dzisiaj')
                        .click({force: true})
                  })
             
      cy.get('.form-group.row > :nth-child(1) > .input-group > div > .select2 > .selection > .select2-selection > .select2-selection__arrow')
                  .click({force:true})
             
      cy.get('ul#select2-contractor_name-results > li')
                  .contains('CCC')
                  .click({force:true})
        
      cy.get('input[name="item_name[0]"]')
                  .type(serviceName, {force: true})
                  .should('have.value', serviceName)
        
      cy.get('input[name="item_unit_price[0]"]')
                  .type(price, {force: true})
                  .should('have.value', price)
        
      cy.get('input[name="payment_due_date[0]"]')
                  .type(today, {force:true})
                  .wait(1000)
        
      cy.get('select[name="bank_account_id"]')
                  .select(nrb, {force: true})
                  .wait(1000)
                  .should('contain', nrb)
        
      cy.wait(2000)

      cy.get('button')
                  .contains('Zapisz i zamknij')
                  .click()
                  
      cy.get('div.navbar-header').within(() => {
            cy.get('button').contains('ewidencja')
                  .click()
                })

      cy.get('div.sidebar-collapse').within(() => {
            cy.get('a > span.nav-label')
                  .contains('Dokumenty')
                 })

      cy.wait(2000)

      cy.get('ul.nav-second-level').within(() => {
            cy.get('li> a')
                  .contains('Lista dokumentów')
                 })

      cy.get('.ibox-title > h4')
                 .should('be.visible')
        
      cy.get('tr.row-one-line > td').contains('F004')
                 .parent('tr.row-one-line')
                 .within(()=> {
                        cy.get('a[data-original-title="Zablokuj edycję dokumentu"]')
                              .should('exist')
              })
        
      cy.get('tr.row-one-line > td').contains(invoiceNumber)
                  .parent('tr.row-one-line')
                  .within(()=> {
                        cy.get('a[data-original-title="Zablokuj edycję dokumentu"]')
                              .should('exist')
           })
      cy.get('tr.row-one-line > td').contains(invoiceNumber)
                  .parent('tr.row-one-line')
                  .within(()=> {
                        cy.get('span.label-danger')
                              .contains('Niekompletny')
                              .should('exist')
           })

      cy.wait(2000)

      cy.get('tr.row-one-line > td').contains(invoiceNumber)
                  .parent('tr.row-one-line')
                  .within(()=> {
                        cy.get('i.fa-coins')
                        .should('exist')
        })

      cy.get('tr.row-one-line > td')
                  .contains(invoiceNumber)
                  .parent('tr.row-one-line')
                  .within(()=> {
                        cy.get('i.fa-lock')
                              .eq(1)
                              .click({force: true})
        })
        
      cy.get('tr.row-one-line > td').contains(invoiceNumber)
                  .parent('tr.row-one-line')
                  .within(()=> {
                        cy.get('i.fa-lock-open')
                        .should('exist')
        })
          })

it('Faktura obca korygująca', () => {
                  
          let currentNewDate = new Date();
          let mm = currentNewDate.getMonth()+1;
          let yyyy = currentNewDate.getFullYear();
          let currentDay = currentNewDate.getDate();
          if(currentDay<10) {
            currentDay = '0'+currentDay
            }
          if(mm<10) {
          mm = '0'+mm
          }
         let currentDate =  yyyy + '-' + mm + '-' + currentDay;    
          
      cy.visit('');

      cy.login(company, email, password);

      cy.get('div.navbar-header').within(() => {
            cy.get('button').contains('ewidencja')
                  .click()
                })

      cy.wait(1000)

      cy.get('div.sidebar-collapse').within(() => {
            cy.get('a > span.nav-label')
                  .contains('Dokumenty')
                  .should('be.visible')
                  .click({force:true})
                 })

      cy.wait(1000)

      cy.get('ul.nav-second-level').within(() => {
            cy.get('li> a')
                  .contains('Dodaj nowy dokument')
                  .should('exist')
                  .click({force:true})
                 })

      cy.get('select[name="document_type"]')
                  .select('Faktura obca korygująca', { force: true })
                  .invoke('val')
                  .should('eq', 'foreign_invoice_correction')
               
      cy.get('button')
                  .contains('Dalej')
                  .click()
            
      cy.wait(1000)

      cy.get('select[name="corrected_document_id"]')
                  .select(invoiceNumber, { force: true })
                  .should('contain', invoiceNumber)

      cy.wait(2000)
            
      cy.get('select[name="corrected_document_id"]')
                  .should('contain', invoiceNumber)
                  .should('have.attr', 'readonly')
            
      cy.get('input.dont-reset-allocation')
                  .should('be.empty')
                  .should('not.have.attr', 'readonly')
            
      cy.get('input[name="date_issued"]')
                  .should('be.empty')
                  .should('not.have.attr', 'readonly')
            
      cy.get('input[name="sale_date"]')
                  .should('have.value', currentDate)
                  .should('have.attr', 'readonly')
            
      cy.get('input[name="date_received"]')
                  .should('be.empty')
            
      cy.get('select#contractor_name')
                  .should('contain', 'CCC')
                  .should('have.attr', 'readonly')
            
      cy.get('#contractor_country')
                  .should('have.value', country)
                  .should('have.attr', 'disabled')
            
      cy.get('input#contractor_address')
                  .should('have.value', 'ul. CCC')
                  .should('have.attr', 'disabled')
            
      cy.get('input#contractor_zip')
                  .should('have.value', zipCode)
                  .should('have.attr', 'disabled')
            
      cy.get('input#contractor_city')
                  .should('have.value', 'Miasto CCC')
                  .should('have.attr', 'disabled')
            
      cy.get('input#contractor_id_number_type')
                  .should('have.value', type)
                  .should('have.attr', 'disabled')
            
      cy.get('select#contractor_id_number')
                  .should('contain', idNumber)
                  .should('have.attr', 'readonly')
            
      cy.get('textarea#contractor_remarks')
                  .should('have.value', 'uwagi CCC')
            
      cy.get('input[value="error"]')
                 .should('be.checked')
            
      cy.get('input[value="incident"]')
                 .should('not.be.checked')
            
      cy.get('textarea[name="reason_text"]')
                 .should('be.empty')
                 .should('have.attr', 'readonly')
                
            //PRZED
            
cy.get('div.before-container')
      .within(()=> {
            
            cy.get('input[name="before_name[0]"]')
                        .should('have.value', serviceName)
                        .should('have.attr', 'readonly')
            
            cy.get('input[name="before_quantity[0]"]')
                        .should('have.value', quantity)
                        .should('have.attr', 'readonly')
            
            cy.get('input[name="before_unit_of_measure[0]"]')
                        .should('be.empty')
                        .should('have.attr', 'readonly')
            
            cy.get('input[name="before_unit_price[0]"]')
                        .should('have.value', price)
                        .should('have.attr', 'readonly')
            
            cy.get('input[name="before_net_amount[0]"]')
                        .should('have.value', netAmount)
                        .should('have.attr', 'readonly')
            
            cy.wait(1000)
            
            cy.get(' div.vat_rate_summary > select[name="before_vat_rate_id[0]"]')
                        .should('have.attr', 'disabled')
            
            cy.get('span.select2-selection__rendered')
                        .eq(0)
                        .should('contain',  vatRate)
                        .should('not.have.attr', 'readonly')
            
            cy.get('input.vat_amount')
                        .should('have.value', vatAmount)
                        .should('have.attr', 'readonly')
            
            cy.get('input[name="before_gross_amount[0]"]')
                        .should('have.value', grossValue)
                        .should('have.attr', 'readonly')
            
            cy.get('span[title="XX: 100% rozliczenie"]')
                        .eq(0)
                        .should('contain', settlement)
            
            cy.get('input[name="before_vat_refund_amount[0]"]')
                        .should('have.value', refund)
                        .should('have.attr', 'readonly')
            
            cy.get('input#net_sum')
                        .should('have.value', price)
                        .should('have.attr', 'readonly')
                        
            cy.get('input#vat_sum')
                        .eq(0)
                        .should('have.value', vatAmount)
                        .should('have.attr', 'readonly')
            
            cy.get('input#gross_sum')
                        .should('have.value', grossValue)
                        .should('have.attr', 'readonly')
            
            cy.get('input#refund_sum')
                        .eq(0)
                        .should('have.value', vatAmount)
                        .should('have.attr', 'readonly')
            })
            
            //PO
            
      cy.get('.after-container').within(()=>{
            
            cy.get('input[name="item_name[0]"]')
                  .should('have.value', serviceName)
                  .should('have.attr', 'readonly')
            
            cy.get('input.quantity')
                  .should('have.value', quantity)
                  .should('not.have.attr', 'readonly')
            
            cy.get('input[name="item_unit_of_measure[0]"]')
                  .should('be.empty')
                  .should('not.have.attr', 'readonly')
            
            cy.get('input.item_unit_price')
                  .should('have.value', price)
                  .should('not.have.attr', 'readonly')
            
            cy.get('input[name="item_net_amount[0]"]')
                  .should('have.value', netAmount)
                  .should('have.attr', 'readonly')
            
            cy.get('span.select2-selection__rendered')
                  .eq(0)
                 .should('contain',  vatRate)
                 .should('not.have.attr', 'readonly')
            
            cy.get('input.vat_amount')
                 .should('have.value', vatAmount)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="item_gross_amount[0]"]')
                  .should('have.value', grossValue)
                  .should('have.attr', 'readonly')
            
            const grossValueChanged = parseInt(grossValue) + 0.01;
            const grossValue2 = grossValueChanged.toLocaleString();
            
            cy.get('.items-after > .form-group')
                  .within(()=> {
                        cy.get('.input-group-btn-vertical > .bootstrap-touchspin-up')
                              .click({force: true})

                        cy.get('input[name="item_gross_amount[0]"]')
                              .should('have.value', grossValue2)

                        cy.get('.input-group-btn-vertical > .bootstrap-touchspin-down')
                              .click({force: true})

                        cy.get('input[name="item_gross_amount[0]"]')
                              .should('have.value', grossValue)
                  })
            
            cy.get('span[title="XX: 100% rozliczenie"]')
                  .should('contain', settlement)
            
            cy.get('input[name="item_vat_refund_amount[0]"]')
                  .should('have.value', refund)
                  .should('have.attr', 'readonly')
            
            const priceChanged = parseInt(price) + 0.01;
            const price2 = priceChanged.toLocaleString();
                  
            cy.get('#item-summary')
                  .within(()=> {
                        cy.get('.input-group-btn-vertical > .bootstrap-touchspin-up')
                              .eq(0)
                              .trigger('click', {force:true})
                              .trigger('change', {force:true})
            
                        cy.get('input#net_sum')
                              .should('have.value', price2)

                        cy.get('.input-group-btn-vertical > .bootstrap-touchspin-down')
                              .eq(0)
                              .trigger('click', {force:true})

                        cy.get('input#net_sum')
                              .should('have.value',price)
                  })
            
            cy.get('input#net_sum')
                  .should('have.value', price)
                  .should('have.attr', 'readonly')
            
            cy.get('input#vat_sum')
                  .eq(0)
                  .should('have.value', vatAmount)
                  .should('have.attr', 'readonly')
            
            cy.get('#item-summary')
                  .within(()=> {
                        cy.get('.input-group-btn-vertical > .bootstrap-touchspin-up')
                              .eq(1)
                              .trigger('click', {force:true})
                        cy.get('input#gross_sum')
                              .should('have.value', grossValue2)
                        cy.get('.input-group-btn-vertical > .bootstrap-touchspin-down')
                              .eq(1)
                              .trigger('click', {force:true})
                        cy.get('input#gross_sum')
                              .should('have.value', grossValue)
                        })
            
            cy.get('input#gross_sum')
                  .should('have.value', grossValue)
                  .should('have.attr', 'readonly')
            
            
            const vatAmountChanged = parseInt(vatAmount) + 0.01;
            const vatAmount2 = vatAmountChanged.toLocaleString();
                        
            cy.get('#item-summary')
                  .within(()=> {
                        cy.get('.input-group-btn-vertical > .bootstrap-touchspin-up')
                              .eq(2)
                              .trigger('click', {force:true})
                        cy.get('input#refund_sum')
                              .should('have.value', vatAmount2)
                        cy.get('.input-group-btn-vertical > .bootstrap-touchspin-down')
                              .eq(2)
                              .trigger('click', {force:true})
                        cy.get('input#refund_sum')
                              .should('have.value',vatAmount)
                        })
                  
            cy.get('input#refund_sum')
                  .eq(0)
                  .should('have.value', vatAmount)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="after_net_sum"]')
                  .should('have.value', price)
                  .should('have.attr', 'readonly')
            
            cy.get('input#vat_sum')
                  .eq(0)
                  .should('have.value', vatAmount)
                  .should('have.attr', 'readonly')
            
            cy.get('input#gross_sum')
                  .should('have.value', grossValue)
                  .should('have.attr', 'readonly')
            
            cy.get('input#refund_sum')
                  .eq(0)
                  .should('have.value', vatAmount)
                  .should('have.attr', 'readonly')
            
            cy.get('i.padding-trash')
                  .should('not.exist')
            
            cy.get('button.add-correction-item')
                  .click({force: true})
            
            cy.get('div.item_correction-row')
                  .eq(1)
                  .should('be.visible')
                  })
            
            // KOREKTA
      cy.get('div.correction-container').within(()=>{
            
            cy.get('input[name="correction_name[0]"]')
                  .should('have.value', serviceName)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="correction_quantity[0]"]')
                  .should('have.value', corr)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="correction_net_amount[0]"]')
                  .should('have.value', corr)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="correction_vat_amount[0]"]')
                  .should('have.value', corr)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="correction_gross_amount[0]"]')
                  .should('have.value', corr)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="correction_vat_refund_amount[0]"]')
                  .should('have.value', corr)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="net_sum"]')
                  .should('have.value', corr)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="vat_sum"]')
                  .should('have.value', corr)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="gross_sum"]')
                  .should('have.value', corr)
                  .should('have.attr', 'readonly')
            
            cy.get('input[name="vat_refund_sum"]')
                   .should('have.value', corr)
                  .should('have.attr', 'readonly')
            
            cy.get('button.connect-with')
                  .should('not.exist')
            
            cy.contains('Sposób zapłaty')
                  .should('not.exist')
            
            cy.contains('Kwota wymagalna')
                  .should('not.exist')
            
            cy.contains('Termin wymagalności')
                  .should('not.exist')
            
            cy.get('input[name="split_payment[-1]"]')
                  .should('not.exist')
            
            cy.contains('Kod szablonu')
                  .should('not.exist')
            })
            
      cy.get('input[name="currency_quantity"]')
                  .should('be.empty')
                  .should('have.attr', 'readonly')
            
      cy.get('input[name="document_currency"]')
                  .should('have.value', 'PLN')
                  .should('have.attr', 'readonly')
            
      cy.get('div.row > div.col-md-2 > input.protect-unsaved-changes')
                  .eq(0)
                  .should('be.empty')
            
      cy.get(':nth-child(12) > .row > .col-md-2 > .protect-unsaved-changes')
                  .should('be.empty')
                  .should('have.attr', 'disabled')
            
      cy.get('input[name="settle_with_original"]')
                  .should('not.be.checked')
            
      cy.get('.is-paid-select-container > select.required_for_final ')
                  .should('have.attr', 'readonly')
            
      cy.get('#is_paid_id')
                  .should('contain', 'Zapłacone')
                  .should('have.attr', 'readonly')
            
      cy.get('input[name="employee_expenses"]')
                  .should('not.be.checked')
                  .should('not.have.attr', 'readonly')
            
      cy.get('.fa-exclamation-triangle')
                  .contains('Ostrzeżenie')
                  .should('not.exist')
            
      cy.get('div.col-md-2')
                  .contains('Waluta')
                  .eq(2)
                  .should('not.exist')
            
      cy.get('div.payment_vat_amount_label')
                  .contains('Kwota VAT')
                  .eq(1)
                  .should('not.exist')
            
      let invoiceNumber2= "T-" + year + monthStr + day  + hour + minute + sec +  "-2";
            
      cy.get('input[name="document_number"]')
                  .click({force:true})
                  .type(invoiceNumber2, {force: true})
            
      cy.get('input[name="date_issued"]')
                  .type(currentDate, {force: true})
            
      cy.get('input[name="date_received"]')
                  .type(currentDate, {force: true})

      cy.visit('https://contsup.serwer.dev/records/documents/group/foreign_documents?filters_reset=true');

      cy.get('i.fa-lock-open')
                  .eq(0)
                  .click({force: true})
                  .wait(2000)

      cy.get('input[form="bulk-action"]')
                  .eq(0)
                  .check()
            
      cy.get('button[data-action="destroy-many"]')
                  .contains('Usuń')
                  .click()
                                      
      cy.get('.confirm')
                  .contains('Usuń')
                  .click()
                 
       cy.get('.toast-message')
                  .should('be.visible')
  
      cy.logout();
          })

    })
 
       
      
 
