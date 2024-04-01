/// <reference types="cypress" />

describe("select file", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("select and cancel", () => {
    cy.get("#buttonselect").click();
    cy.get("input[type=file]").selectFile(
      "cypress/assets/Скриншот 26-03-2024 171658.jpg",
      {
        force: true,
      }
    );
  });
  it("select and delete", () => {
    cy.get("#buttonselect").click();
    cy.get("input[type=file]").selectFile(
      "cypress/assets/Скриншот 26-03-2024 171658.jpg",
      {
        force: true,
      }
    );
    cy.get("#buttondelete").click();
  });
  it("go to color scheme", () => {
    cy.visit("http://localhost:5173/colorscheme");
  });
});
