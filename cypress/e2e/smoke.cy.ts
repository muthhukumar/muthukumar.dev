describe("smoke tests", () => {
  it("should visit the page", () => {
    cy.visitAndCheck("/");
  });
});
