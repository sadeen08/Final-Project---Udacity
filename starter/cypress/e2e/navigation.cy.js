describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to the Card Sets page when clicking on Card Sets menu item", () => {
    cy.get("#cardSetPage").click({ force: true });

    cy.get('[data-cy="study-set-header"]').should("be.visible");
    cy.get('[data-cy="study-set-header"]').should(
      "contain",
      "Study Set Library"
    );
  });

  it("should navigate to the About page when clicking on About menu item", () => {
    cy.get("#aboutPage").click({ force: true });

    cy.get('[data-cy="about_page"]').should("be.visible");
    cy.get('[data-cy="about_page"]').should("contain", "About Study Night");
  });

  it("should navigate to the Home page when clicking on Home menu item", () => {
    cy.get("#aboutPage").click({ force: true });

    cy.get("#homePage").click({ force: true });

    cy.get('[data-cy="home_header"]').should("be.visible");
    cy.get('[data-cy="home_header"]').should("contain", "Study Night");
  });
});
