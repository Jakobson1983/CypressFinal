// https://docs.cypress.io/api/cypress-api/custom-commands

describe("Basics", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });
    
    it("Successful login", () => {
        // cy.get("#userName").type("test");
        // cy.get("#password").type("test1234");
        // cy.get("#login").click();
        cy.login("test", "test1234*");
        cy.url().should("contain", "profile");

    });
    it("Wrong user login", () => {
        // cy.get("#userName").type("wrongUser");
        // cy.get("#password").type("wrongPassword");
        // cy.get("#login").click();
        cy.login("wrongUser", "wrongPassword");
        cy.url().should("contain", "login");
    });
});