describe("Click challenge", () => {
    beforeEach(() => {
        cy.visit("/click");
    });
    it("Class assertion", () => {
        cy.get("#badButton").click().should("have.css", "background-color", "rgb(40, 167, 69)");
    });
});

describe.skip("Hover challenge", () => {
    beforeEach(() => {
        cy.visit("/mouseover");
    });
    it("Hover with cypress workarround", () => {
        cy.get(".text-primary").realHover();
    });
});
describe("Dynamic table challenge", () => {
    beforeEach(() => {
        cy.visit("/dynamictable");
    });
    it("Chrome CPU test", () => {
        cy.get(`div[role="row"] span`).each(($cell) => {
            if ($cell.text().includes("Chrome")) {
                cy.log(`I have found the ${$cell.text()} row!`);
                let chromeRowValues : string[] = [];
                chromeRowValues.push($cell.next().text());
                chromeRowValues.push($cell.next().next().text());
                chromeRowValues.push($cell.next().next().next().text());
                chromeRowValues.push($cell.next().next().next().next().text());
                cy.log("chrome Row Values", chromeRowValues);
                chromeRowValues.forEach((chromeValue) => {
                    if (chromeValue.includes("%")) {
                        cy.log(chromeValue);
                        cy.get(".bg-warning").should("have.text", `Chrome CPU: ${chromeValue}`);
                    }
                });
            }
        });
    });
});

