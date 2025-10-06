describe('Website Basic Flow', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/fixture/index.html'); 
  });

  it('should load homepage correctly', () => {
    cy.title().should('include', 'My Website');
    cy.get('h1').should('be.visible');
  });

  it('should navigate to About section', () => {
    cy.contains('About').click();
    cy.url().should('include', '#about');
    cy.get('#about').should('be.visible');
  });

  it('should navigate to Features section', () => {
    cy.contains('Features').click();
    cy.url().should('include', '#features');
    cy.get('.feature-item').should('have.length.at.least', 1);
  });

  it('should handle Hero button alert', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Learn More clicked!');
    });
    cy.get('#learnBtn').click();
  });

  it('should fill and submit contact form', () => {
    cy.get('input[name="name"]').type('Anamika');
    cy.get('input[name="email"]').type('anamika@example.com');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').click();
    cy.get('.success-msg').should('contain', 'Thank you');
  });
});
