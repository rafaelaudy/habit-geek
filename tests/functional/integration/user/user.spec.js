const email = "#user-form-email";
const password = "#user-form-password";
const loginBtn = ".btn-primary";

const name = "#profile-name";
const validation = ".invalid-feedback";

const saveProfile = ".btn-primary";

const login = () => {
  cy.get(email).type("Mari");
  cy.get(password).type("Mari");
  cy.get(loginBtn).click();
};

context("Save", () => {
  beforeEach(() => {
    cy.visit("/login");
    login();
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
