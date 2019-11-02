beforeEach(() => {
  const now = new Date(2019, 0, 19).getTime();
  window.Cypress.habitMock = "3FullWeeks";
  cy.clock(now);
});
