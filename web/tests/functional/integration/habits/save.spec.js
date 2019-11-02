import { editHabit } from "../utils";

const backWeekButton = ".icon-button-previous";
const forwardWeekButton = ".icon-button-forward";
const header = ".dashboard-week-header";
const newHabitButton = ".btn-primary";
const habitRow = ".habit-row";

const name = "#new-habit-name";
const type = "#new-habit-type";
const frequency = "#new-habit-frequency";
const validation = ".invalid-feedback";

const saveHabit = ".btn-primary";
const cancelHabit = ".btn-secondary";
const deleteHabit = ".btn-danger";

const savesHabit = triggerButton => {
  cy.get(name).type("new habit");
  cy.get(type).select("Health");
  cy.get(frequency).select("2x");
  cy.get(saveHabit).click();
};

const saveNewHabit = triggerButton => {
  cy.get(newHabitButton).click();
  savesHabit();
};

const saveEditHabit = triggerButton => {
  editHabit(0);
  savesHabit();
};

context("Save", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("Create habit", () => {
    it("Validate form", () => {
      cy.get(newHabitButton).click();
      cy.get(saveHabit).click();
      cy.get(validation).should("have.lengthOf", 3);
    });

    it("Cancels creation", () => {
      cy.get(newHabitButton).click();
      cy.get(cancelHabit).click();
      cy.get(header).should("exist");
    });

    it("Creates habit", () => {
      cy.get(habitRow).should("have.lengthOf", 2);
      saveNewHabit();
      cy.get(habitRow).should("have.lengthOf", 3);
    });

    it("Not available on previous weeks", () => {
      cy.get(habitRow).should("have.lengthOf", 2);
      cy.get(backWeekButton).click();
      cy.get(habitRow).should("have.lengthOf", 2);
      cy.get(forwardWeekButton).click();
      saveNewHabit();
      cy.get(habitRow).should("have.lengthOf", 3);
      cy.get(backWeekButton).click();
      cy.get(habitRow).should("have.lengthOf", 2);
    });
  });

  context("Edit habit", () => {
    beforeEach(() => {});

    it("Validate form", () => {
      editHabit(0);
      cy.get(name).clear();
      cy.get(type).select("");
      cy.get(frequency).select("");
      cy.get(saveHabit).click();
      cy.get(validation).should("have.lengthOf", 3);
    });

    it("Cancels edit", () => {
      editHabit(0);
      cy.get(cancelHabit).click();
      cy.get(header).should("exist");
    });

    it("Saves habit", () => {
      cy.get(habitRow).should("have.lengthOf", 2);
      saveEditHabit();
      cy.get(habitRow).should("have.lengthOf", 2);
    });

    it("Deletes habit", () => {
      cy.get(habitRow).should("have.lengthOf", 2);
      editHabit(0);
      cy.get(deleteHabit).click();
      cy.get(habitRow).should("have.lengthOf", 1);
    });
  });
});
