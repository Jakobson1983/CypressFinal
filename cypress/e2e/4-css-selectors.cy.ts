describe("css selectors", () => {
    beforeEach(() => {
        cy.visit("/dynamicid");
    });
    it("Cy. Contains example", () => {
        cy.contains("Button with Dynamic ID").should('have.text', 'Button with Dynamic ID');
        });
    it("Cy. Get example +cy.find example", () => {
        cy.get("div").find("button");
        });

    it("Css selector using a atribute", () => {
        cy.get(`button[class="btn btn-primary"]`).should("have.text", "Button with Dynamic ID");
    });    
    it("Css selector using a class", () => {
        cy.get(`.btn-primary`).should("have.text", "Button with Dynamic ID");
});
});