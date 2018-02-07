describe('My First Test', () => {
  it('Does not do much', () => {
    expect(true).to.equal(true);
  })
})

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
    it('should have a visible div with expanded elements', () => {
      cy.get('.navbar').should('contain', 'For Approval');
      cy.get('.navbar').children('button').should('be.visible');
      cy.get('.navbar').children('div').should('not.be.visible');
      cy.get('.navbar').children('button').click();
      cy.get('.navbar').children('div').should('be.visible');
    })
  })
})
