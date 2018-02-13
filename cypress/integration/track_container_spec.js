describe('TrackContainer', () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  describe('when the track NavItem is clicked', () => {
    beforeEach(() => {
      cy.toggleNavBar();
    })
    it('should go to the TrackContainer', () => {
      cy.get('#track').click();
    })
  })
});
