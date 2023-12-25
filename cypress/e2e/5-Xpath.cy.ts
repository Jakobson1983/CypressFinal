describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/classattr");
    });
    it("How to find an element by its text", () => {
        cy.xpath(`//*[text()='Correct variant is']`);
    });
    it("How to find an element by its text", () => {
        cy.xpath(`//pre[@class=' language-html']`).should("contain.text","button");
    });
    it("How to find an element by class", () => {
        cy.xpath(`//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]`).should("have.css", "background-color");
});
});