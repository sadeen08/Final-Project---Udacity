describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to the Card Sets page when clicking on Card Sets menu item", () => {
    cy.get("#cardSetPage").click();

    cy.get('[data-cy="card_set_header"]').should("be.visible");
    cy.get('[data-cy="card_set_header"]').should("contain", "Study Sets");
  });

  it("should navigate to the About page when clicking on About menu item", () => {
    cy.get("#aboutPage").click();

    cy.get('[data-cy="about_header"]').should("be.visible");
    cy.get('[data-cy="about_header"]').should("contain", "About");
  });

  it("should navigate to the Home page when clicking on Home menu item", () => {
    cy.get("#aboutPage").click();

    cy.get("#homePage").click();

    cy.get('[data-cy="home_header"]').should("be.visible");
    cy.get('[data-cy="home_header"]').should("contain", "Study Night");
  });
});
