import { getRow, toggleHabit } from "../utils";

const backWeekButton = ".icon-button-previous";
const forwardWeekButton = ".icon-button-forward";
const header = ".dashboard-week-header";

const habitCheckbox = ".toggle__input";

const rowStatus = ".habit-row-frequency";
const successRow = ".table-success";
const failedRow = ".table-danger";

context("Habits", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Navigation between weeks", () => {
    it("can't navigate back in the first week", () => {
      window.Cypress.habitMock = "1FullWeek";
      cy.visit("/");

      cy.get(header).contains("Week 3");
      cy.get(forwardWeekButton).should("not.exist");
      cy.get(backWeekButton).should("not.exist");
    });

    it("can't navigate back if the previous week is empty", () => {
      window.Cypress.habitMock = "PartialWeeks";
      cy.visit("/");

      cy.get(header).contains("Week 3");
      cy.get(forwardWeekButton).should("not.exist");
      cy.get(backWeekButton).should("not.exist");
    });

    it("navigates between weeks", () => {
      cy.get(backWeekButton).click();
      cy.get(header).contains("Week 2");
      cy.get(forwardWeekButton).should("not.have.class", "disabled");
      cy.get(backWeekButton).should("have.class", "disabled");
      cy.get(forwardWeekButton).click();
      cy.get(header).contains("Week 3");
      cy.get(forwardWeekButton).should("have.class", "disabled");
      cy.get(backWeekButton).should("not.have.class", "disabled");
    });
  });

  context("Previous weeks", () => {
    beforeEach(() => {
      cy.get(backWeekButton).click();
    });

    it("show habits state", () => {
      getRow(0, () => cy.get(successRow));
      getRow(1, () => cy.get(failedRow));
    });

    it("achieve and blow up a habit", () => {
      toggleHabit(1, 0, () => cy.get(successRow));
      toggleHabit(1, 0, () => cy.get(failedRow));
    });

    it("cant toggle habits every day of the week", () => {
      toggleHabit(0, 6);
    });
  });

  context("Current week", () => {
    it("show habits state", () => {
      getRow(0, () => cy.get(successRow));
      getRow(1, () => cy.get(failedRow));
    });

    it("achieve and blow up a habit", () => {
      toggleHabit(1, 0);
      getRow(1, () => cy.get(rowStatus).not(failedRow));
      toggleHabit(1, 3, () => cy.get(successRow));
    });

    it("disable toggle of habit on future dates", () => {
      toggleHabit(0, 5);
      getRow(0, () => {
        cy.get(habitCheckbox)
          .eq(5)
          .should("be.checked");
      });
      toggleHabit(0, 6);
      getRow(0, () => {
        cy.get(habitCheckbox)
          .eq(6)
          .should("not.be.checked");
      });
    });
  });
});
