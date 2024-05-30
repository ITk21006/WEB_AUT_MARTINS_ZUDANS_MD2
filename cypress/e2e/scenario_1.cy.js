describe('CURA Healthcare Service', () => {
  it('Make an Appointment', () => {
    // Step i: Open the website
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    // Step ii: Click "Make Appointment"
    cy.get('#btn-make-appointment').click();

    // Step iii: Set username and password fields with the demo account credentials
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');

    // Step iv: Click "Login"
    cy.get('#btn-login').click();

    // Step v: Set the following values
    // 1. Facility - Seoul CURA Healthcare Center
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');

    // 2. Check - Apply for hospital readmission
    cy.get('#chk_hospotal_readmission').check();

    // 3. Select - Medicaid
    cy.get('#radio_program_medicaid').check();

    // 4. Set Date value by using the widget - 30
    cy.get('.input-group-addon').click(); // Open date picker
    cy.get('.day').contains('30').click(); // Select day 30

    // Click outside to close the date picker
    cy.get('body').click(0, 0);

    // 5. Set comment - CURA Healthcare Service
    cy.get('#txt_comment').type('CURA Healthcare Service');

    // 6. Click "Book Appointment"
    cy.get('#btn-book-appointment').click();

    // Step vi: Validate that previously set values are correct
    // Verify Facility
    cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');

    // Verify Hospital readmission
    cy.get('#hospital_readmission').should('have.text', 'Yes');

    // Verify Healthcare Program
    cy.get('#program').should('have.text', 'Medicaid');

    // Verify Visit Date
    cy.get('#visit_date').should('have.text', '30/04/2024');

    // Verify Comment
    cy.get('#comment').should('have.text', 'CURA Healthcare Service');
  });
});
