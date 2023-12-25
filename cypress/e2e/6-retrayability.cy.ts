Cypress.config("defaultCommandTimeout", 16000);
describe("Retrayability", () => {
    it("Visit with delay", () => {  
        cy.visit("/loaddelay", {timeout: 30000});
    });
    it("Client delay button", () => {  
        cy.visit("/clientdelay");
        cy.get("#ajaxButton").click();
        cy.get('.bg-success').should("contain.text", "Data calculated on the client side.");
    });
    it.only("Progress bar", () => {  
        cy.visit("/progressbar");
        cy.get("#startButton", { timeout: 30000 }).click();
        cy.get(".progress-bar").should("have.text", "50%");
    });
});
