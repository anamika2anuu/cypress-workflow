// Runs before every test
beforeEach(() => {
  cy.log('🚀 Starting a new Cypress test...');
});

// Example custom command for filling a contact form
Cypress.Commands.add('fillContactForm', (name, email, message) => {
  cy.get('input[name="name"]').type(name);
  cy.get('input[name="email"]').type(email);
  cy.get('textarea[name="message"]').type(message);
  cy.get('button[type="submit"]').click();
});
