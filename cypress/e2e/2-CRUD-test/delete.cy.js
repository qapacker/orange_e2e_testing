/// <reference types="cypress" />

describe('Delete Employee Test', () => {
    it('should successfully delete an employee record', () => {
      cy.visit('/web/index.php/auth/login');
  
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('username'));
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('password'));
      cy.get('.oxd-button').click();
  
      cy.url().should('include', '/dashboard');
  
      cy.get(':nth-child(2) > .oxd-main-menu-item').click(); // Navigate to PIM

      // Search for the employee to be deleted
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
        .type('John Doe');

      // Click on Search button
      cy.get('.oxd-form-actions > .oxd-button--secondary').click();

      // Wait for search results to load
      cy.get('.oxd-table').should('contain', 'John Doe');

      // Click on checkbox to select the employee
      cy.get('.oxd-table-header > .oxd-table-row > :nth-child(1)').click();

      // Click on Delete button
      cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click();

      // Confirm deletion
      cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click();

      // Assert that the employee is no longer present in the list
      cy.get('.oxd-table').should('not.contain', 'John Doe');
    });
});