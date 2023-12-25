describe("Enviroment variables challenge", () => {
    it("demo", () => {
        cy.log(`Printing env var: ${Cypress.env("demoVar")}`);
    });
});