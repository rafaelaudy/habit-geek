import { getRow } from "../utils";

const emptyData = ".history__empty-data";
const historyHeader = ".history__header-button";
const historyContent = ".show .card-body";

const toggleHabit = ".habit-row-frequency__cell";
const habitCheckbox = ".toggle__input";

const successRow = ".table-success";
const failedRow = ".table-danger";

context("History", () => {
  beforeEach(() => {
    cy.visit("/history");
  });

  it("Show default message if there are no past weeks", () => {
    window.Cypress.habitMock = "1FullWeek";
    cy.visit("/history");
    cy.get(emptyData).should("exist");
  });

  it("Hides empty weeks", () => {
    window.Cypress.habitMock = "PartialWeeks";
    cy.visit("/history");
    cy.get(historyHeader).should("have.lengthOf", 1);
  });

  it("Show weeks in alphabetical order", () => {
    cy.get(historyHeader)
      .eq(0)
      .should("contain", "2");
    cy.get(historyHeader)
      .eq(1)
      .should("contain", "1");
  });

  it("Toggle weeks", () => {
    cy.get(historyContent).should("have.lengthOf", 1);
    cy.get(historyHeader)
      .eq(0)
      .click();
    cy.get(historyContent).should("have.lengthOf", 0);
    cy.get(historyHeader)
      .eq(1)
      .click();
    cy.get(historyContent).should("have.lengthOf", 1);
  });

  it("Not able to toggle habits", () => {
    cy.get(habitCheckbox)
      .eq(0)
      .should("be.checked");
    cy.get(toggleHabit)
      .eq(0)
      .click();
    cy.get(habitCheckbox)
      .eq(0)
      .should("be.checked");
  });

  it("show habits state", () => {
    getRow(0, () => cy.get(successRow));
    getRow(1, () => cy.get(failedRow));
  });
});
