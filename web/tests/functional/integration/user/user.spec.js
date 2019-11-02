const name = "#profile-name";
const validation = ".invalid-feedback";

const saveProfile = ".btn-primary";

context("Save", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/profile");
  });

  it("Validate form", () => {
    cy.get(saveProfile).click();
    cy.get(validation).should("have.lengthOf", 1);
  });

  it("Saves user", () => {
    cy.get(name).type("Mari");
    cy.get(saveProfile).click();
    cy.url().should("includes", "habits");
  });
});
