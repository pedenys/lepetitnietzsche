/// <reference types="cypress"/>
context("Home page", () => {
  // got to home page
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should find the title of the page", () => {
    cy.get("h1 > a").contains("Le petit Nietzsche");
  });

  it("should display two paragraphs when clicking on the box", () => {
    cy.get("div[style='cursor:pointer']").each((box) => {
      box.trigger("click");
      cy.get(box)
        .next(
          'div[style*="animation: 1s ease 0s 1 normal none running fadeIn"]'
        )
        .children("div")
        .children()
        .should("have.length", 2);
    });
  });
});
