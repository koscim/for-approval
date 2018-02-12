describe('NavBar', () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  describe('when the navbar-toggler is not toggled', () => {
    it('should not have a visible div with expanded elements', () => {
      cy.get('.navbar').should('contain', 'For Approval');
      cy.get('.navbar').children('button').should('be.visible');
      cy.get('.navbar').children('div').should('not.be.visible');
    });
  });

  describe('when the navbar-toggler is toggled', () => {
    beforeEach(() => {
      cy.toggleNavBar();
    })
    it('should have a visible div with expanded elements', () => {
      cy.get('.navbar').children('div').should('be.visible');
    });
    it('should have a dropdown element', () => {
      cy.get('#dropdown01').should('be.visible');
    });
    it('should have four nav-links', () => {
      cy.get('.nav-link').should('have.length', 5);
    });
  });

  describe('when the dropdown-menu in navbar is clicked', () => {
    beforeEach(() => {
      cy.toggleActionDropdown();
    });
    it('should have three dropdown-items', () => {
      cy.get('.dropdown-item').should('have.length', 3);
    });
  });
});
