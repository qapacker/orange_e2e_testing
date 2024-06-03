/// <reference types="cypress" />

describe('Login Test', () => {
  it('should successfully login with valid credentials', () => {
    cy.visit('/web/index.php/auth/login');

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('username'));
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('password'));
    cy.get('.oxd-button').click();

    cy.url().should('include', '/dashboard');
    cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
  });
});
  