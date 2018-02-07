describe('My First Test', () => {
  it('Does not do much', () => {
    expect(true).to.equal(true);
  })
})

describe('NavBar', () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it('cy.get() - query DOM elements', () => {
    cy.get('.navbar').should('contain', 'For Approval');
    cy.get('.navbar').children('button').should('be.visible');
    cy.get('.navbar').children('div').should('not.be.visible');
    cy.get('.navbar').children('button').click();
    cy.get('.navbar').children('div').should('be.visible');
    // cy.contains('Search').children('i').should('have.class', 'fa-search')
  })
})
