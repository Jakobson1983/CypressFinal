import { LoginPage } from "../../cypress/pages/Login";
import { ProfilePage } from "../../cypress/pages/Profile";
describe("Basics", () => {
    beforeEach(() => {
        LoginPage.visit();
    });
    it("Successful login", () => {
        // cy.get("#userName").type("test");
        // cy.get("#password").type("test1234*");
        // cy.get("#login").click();
        LoginPage.usernameElement.type("test");
        LoginPage.passwordElement.type("test1234*");
        LoginPage.loginElement.click();
        cy.url().should("contain", "profile");
        LoginPage.userElement.should("have.text", "test");
        ProfilePage.headerElement.should("have.text", "Profile");
        cy.get("#userName-value").should("have.text", "test");

    });
    it("Wrong user login", () => {
        // cy.get("#userName").type("wrongUser");
        // cy.get("#password").type("wrongPassword");
        // cy.get("#login").click();
        LoginPage.submitLogin("wrongUser", "wrongPassword");
        cy.url().should("not.contain", "profile");
        // cy.get("#name").should("have.text", "Invalid username or password!");
        LoginPage.invalidLoginMessageElement.should("have.text", "Invalid username or password!");
        LoginPage.headerElement.should("have.text", "Login");
    });
});