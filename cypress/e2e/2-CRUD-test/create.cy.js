describe('Create Employee Test', () => {
    it('should successfully create a new employee', () => {
      cy.visit('/web/index.php/auth/login');
  
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('username'));
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('password'));
      cy.get('.oxd-button').click();
  
      cy.url().should('include', '/dashboard');
  
      cy.get(':nth-child(2) > .oxd-main-menu-item').click(); // Navigate to PIM
      cy.get('.orangehrm-header-container > .oxd-button').click(); // Add Employee
  
      cy.get('[name="firstName"]').type('John');
      cy.get('[name="lastName"]').type('Doe');
      cy.get('.oxd-button--secondary').click(); // Save
  
      cy.get('.oxd-toast').should('contain', 'Successfully Saved');
    });
  });