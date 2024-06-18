describe('API Create Employee Test', () => {
    before(() => {
      // Perform UI login to capture session cookies
      cy.visit('http://localhost:8200/web/index.php/auth/login');
      cy.get('input[name="username"]').type('mateo.gil');
      cy.get('input[name="password"]').type('aLon65tr0ngPassw0rd!');
      cy.get('button[type="submit"]').click();
  
      // Ensure login was successful by checking for the presence of an element unique to the logged-in state
      cy.url().should('include', '/dashboard'); // Adjust based on your application's URL after login
    });
  
    it('should successfully create a new employee', () => {
      cy.getCookie('_orangehrm').then((cookie) => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:8200/web/index.php/api/v2/pim/employees',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `${cookie.name}=${cookie.value}` // Pass the session cookie
          },
          body: {
            firstName: 'John',
            lastName: 'Doe'
          }
        }).then((response) => {
          // Assert the response status and any other necessary fields
          expect(response.status).to.eq(200); // Adjust based on expected status code 
        });
      });
    });
  });