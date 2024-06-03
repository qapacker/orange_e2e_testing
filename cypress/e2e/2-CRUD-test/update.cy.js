/// <reference types="cypress" />

describe('Update Employee Test', () => {
    it('should successfully update an employee record', () => {
      cy.visit('/web/index.php/auth/login');
  
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('username'));
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('password'));
      cy.get('.oxd-button').click();
  
      cy.url().should('include', '/dashboard');
  
      cy.get(':nth-child(2) > .oxd-main-menu-item').click(); // Navigate to PIM

      // Search for the employee to be updated
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
        .type('John Doe');

      // Click on Search button
      cy.get('.oxd-form-actions > .oxd-button--secondary').click();

      // Wait for search results to load
      cy.get('.oxd-table').should('contain', 'John Doe');

      // Click on the employee to open the profile
      cy.get('.oxd-table').contains('John Doe').click();

      // Make changes to the employee profile
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
        .click(); // Click on nationality dropdown
      cy.get('.oxd-select-dropdown').contains('American').click(); // Select American

      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')
        .click(); // Click on civil status dropdown
      
        cy.get('.oxd-select-dropdown').contains('Married').click(); // Select Married

      // Save changes
      cy.get('.oxd-form-actions > .oxd-button').click();
      
      // Assert success message in the toast popup
      cy.get('.oxd-toast').should('contain', 'Successfully Updated');
      
    });
});
