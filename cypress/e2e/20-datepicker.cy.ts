describe("Datepicker", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/date-picker`);
    });
    it("Data picker demo", () => {
       cy.get("input#datePickerMonthYearInput").click();
       cy.get("select.react-datepicker__month-select").select("January");
       cy.get("select.react-datepicker__year-select").select("1990");
       cy.findByText("16").click();
       cy.get("input#datePickerMonthYearInput").should("have.value", "01/16/1990");
    });
});