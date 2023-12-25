describe("Upload file", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/upload-download`);
    });
    it("Upload file", () => {
            cy.get('input#uploadFile').attachFile("example.json");
            cy.get("p#uploadedFilePath").should("contain", "example.json");
        });
    });
