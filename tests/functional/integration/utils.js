const habitRows = ".habit-row";
const habitToggle = ".toggle";
const editHabitButton = ".icon-button__edit";

export const editHabit = index => {
  cy.get(editHabitButton)
    .eq(index)
    .click();
};

export const getRow = (rowIndex, withinFunc) => {
  cy.get(habitRows)
    .eq(rowIndex)
    .within(() => {
      withinFunc && withinFunc();
    });
};

export const toggleHabit = (rowIndex, dayIndex, withinFunc) => {
  getRow(rowIndex, () => {
    cy.get(habitToggle)
      .eq(dayIndex)
      .click();
    withinFunc && withinFunc();
  });
};
