describe("Form Tests", () => {
  beforeEach(() => {
    // Visit the Card Sets page before each test
    cy.visit("/");
    cy.get("#cardSetPage").click();
  });

  describe("Create Set Form", () => {
    it("should successfully create a new set with valid input (happy path)", () => {
      cy.contains("button", "Create New Study Set").click();

      // Wait for the form to be visible
      cy.get('[data-cy="set_form"]').should("be.visible");

     
      cy.get('[data-cy="set_form"] input[name="titleInput"]').type("Test Set");

      
      cy.get('[data-cy="set_form"] input[type="submit"]').click();

     
      cy.contains("Test Set").should("be.visible");
    });

    it("should show an error when submitting an empty string (unhappy path)", () => {
      cy.contains("button", "Create New Study Set").click();

      cy.get('[data-cy="set_form"]').should("be.visible");

      cy.get('[data-cy="set_form"] input[type="submit"]').click();

      // Verify error message is displayed
      cy.get('[data-cy="error"]').should("be.visible");
      cy.get('[data-cy="error"]').should("contain", "TITLE CANNOT BE EMPTY");
    });
  });

  describe("Add Card Form", () => {
    beforeEach(() => {
      cy.contains("button", "Create New Study Set").click();
      cy.get('[data-cy="set_form"]').should("be.visible");
      cy.get('[data-cy="set_form"] input[name="titleInput"]').type(
        "Test Card Set"
      );
      cy.get('[data-cy="set_form"] input[type="submit"]').click();

      cy.contains("Test Card Set").click();
    });

    it("should successfully add a new card with valid input (happy path)", () => {
      cy.get('[data-cy="card_form"]').should("be.visible");

      cy.get('[data-cy="card_form"] input[name="termInput"]').type("Test Term");
      cy.get('[data-cy="card_form"] input[name="descriptionInput"]').type(
        "Test Description"
      );

      cy.get('[data-cy="card_form"] input[type="submit"]').click();

      cy.contains("Test Term").should("be.visible");
    });

    it("should show an error when submitting empty term (unhappy path)", () => {
      cy.get('[data-cy="card_form"]').should("be.visible");

      cy.get('[data-cy="card_form"] input[name="descriptionInput"]').type(
        "Test Description"
      );

      cy.get('[data-cy="card_form"] input[type="submit"]').click();

      cy.get('[data-cy="error"]').should("be.visible");
      cy.get('[data-cy="error"]').should("contain", "TERM CANNOT BE EMPTY");
    });

    it("should show an error when submitting empty description (unhappy path)", () => {
      cy.get('[data-cy="card_form"]').should("be.visible");

      cy.get('[data-cy="card_form"] input[name="termInput"]').type("Test Term");

      cy.get('[data-cy="card_form"] input[type="submit"]').click();

      cy.get('[data-cy="error"]').should("be.visible");
      cy.get('[data-cy="error"]').should(
        "contain",
        "DESCRIPTION CANNOT BE EMPTY"
      );
    });

    it("should show an error when submitting both empty inputs (unhappy path)", () => {
      cy.get('[data-cy="card_form"]').should("be.visible");

      cy.get('[data-cy="card_form"] input[type="submit"]').click();

      cy.get('[data-cy="error"]').should("be.visible");
      cy.get('[data-cy="error"]').should(
        "contain",
        "TERM AND DESCRIPTION CANNOT BE EMPTY"
      );
    });
  });
});
