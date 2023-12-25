describe("Download file", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/upload-download`);
    });
    it("Download file", () => {
            cy.get("a#downloadButton").click();
            cy.verifyDownload("sampleFile.jpeg")
        });
    });
