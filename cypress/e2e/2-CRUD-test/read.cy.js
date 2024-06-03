/// <reference types="cypress" />

describe('Read Employee Test', () => {
    it('should successfully read an employee record', () => {
      cy.visit('/web/index.php/auth/login');
  
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('username'));
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('password'));
      cy.get('.oxd-button').click();
  
      cy.url().should('include', '/dashboard');
  
      cy.get(':nth-child(2) > .oxd-main-menu-item').click(); // Navigate to PIM

      // Search for the employee
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
        .type('John Doe');

      // Click on Search button
      cy.get('.oxd-form-actions > .oxd-button--secondary').click();

      // Wait for search results to load
      cy.get('.oxd-table-body').should('exist');

      // Assert that the employee name is present in the table
      cy.get('.oxd-table-body').contains('John Doe').should('exist');
    });
});
