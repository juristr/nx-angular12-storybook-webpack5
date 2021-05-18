describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navcomponent--primary'));

  it('should render the component', () => {
    cy.get('storybook-example2-nav').should('exist');
  });
});
