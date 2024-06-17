///<reference types="cypress" />

describe("Logout Test", () => {

  beforeEach(() => {
      cy.visit("/web/index.php/auth/login");
  });

  it("should successfully logout", () => {
      // Login
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('username'));
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('password'));
      cy.get('.oxd-button').click();

      // Validate redirection to dashboard
      cy.url().should('include', '/dashboard');
      cy.get('.oxd-topbar-header-title').should('contain', 'Pizarra');

      // Click on user dropdown and select logout
      cy.get('.oxd-userdropdown-tab').click();
      cy.get(':nth-child(4) > .oxd-userdropdown-link').click();

      // Validate redirection to login page
      cy.url().should('include', '/auth/login');
      cy.get('.oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
  });

});

  