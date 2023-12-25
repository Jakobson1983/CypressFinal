describe("cy.viewport() demo", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("Angular")}/angularjs-practice-site`);
        
    });
    it("device name", () => {
        
        cy.viewport("iphone-6");
    });
    it("specific viewport size", () => {});
});