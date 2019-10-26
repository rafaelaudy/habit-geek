const backWeekButton = ".fa-chevron-circle-left";
const forwardWeekButton = ".fa-chevron-circle-right";
const header = ".dashboard-week-header__header";

const habitRows = ".habit__row";
const habitToggle = ".toggle";
const habitCheckbox = ".toggle__input";

const rowStatus = ".habit__cell-frequency-container";
const successRow = ".table-success";
const failedRow = ".table-danger";

const getRow = (rowIndex, withinFunc) => {
  cy.get(habitRows)
    .eq(rowIndex)
    .within(() => {
      withinFunc && withinFunc();
    });
};

const toggleHabit = (rowIndex, dayIndex, withinFunc) => {
  getRow(rowIndex, () => {
    cy.get(habitToggle)
      .eq(dayIndex)
      .click();
    withinFunc && withinFunc();
  });
};

context("Habits", () => {
  beforeEach(() => {
    const now = new Date(2019, 0, 19).getTime();
    cy.clock(now);
    cy.visit("http://localhost:3000");
  });

  context("Navigation between weeks", () => {
    it("navigates between weeks", () => {
      cy.get(backWeekButton).click();
      cy.get(header).contains("Week 2");
      cy.get(forwardWeekButton).click();
      cy.get(header).contains("Week 3");
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
