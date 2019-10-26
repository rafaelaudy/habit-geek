import { backWeekButton, forwardWeekButton, header } from "./habits.page";

context("Previous weeks", () => {
  beforeEach(() => {
    const now = new Date(2019, 0, 19).getTime();
    cy.clock(now);
    cy.visit("http://localhost:3000");
  });

  it("navigates between weeks", () => {
    cy.get(backWeekButton).click();
    cy.get(header).contains("Week 2");
    cy.get(forwardWeekButton).click();
    cy.get(header).contains("Week 3");
  });

  it("show habits state", () => {});

  // it("achieve and blow up a habit", () => {});

  // it("cant toggle habits every day of the week", () => {});
});

context("Current week", () => {
  // beforeEach(() => {
  //   cy.visit("http://localhost:3000/");
  // });
  // it("change habits state on load", () => {});
  // it("achieve and blow up a habit", () => {});
  // it("disable toggle of habit on future dates", () => {});
});
