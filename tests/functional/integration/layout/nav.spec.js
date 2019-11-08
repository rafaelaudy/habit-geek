const clickNav = index =>
  cy
    .get(".nav-item")
    .eq(index)
    .click();

context("Nav", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Navigates between different sections of the website", () => {
    clickNav(1);
    cy.url().should("includes", "history");
    clickNav(2);
    cy.url().should("includes", "profile");
    clickNav(0);
    cy.url().should("includes", "habits");
  });
});
