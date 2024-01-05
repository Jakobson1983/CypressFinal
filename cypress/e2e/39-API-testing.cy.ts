describe("API testing", () => {
    it("GET - request", () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            cy.log("response: ", response);
        });
    });

    it("POST - request", () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: 'title #101',
                body: 'post #101',
                userId: 101,
            }
        }).then((response) => {
            cy.log("response: ", response);
        });
    });
    it("Update - request", () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                id: 1,
                title: 'title example',
                body: 'bbody example',
                userId: 1,
            }
        }).then((response) => {
            cy.log("response: ", response);
        });
    });
    it("DELETE- a resource", () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            cy.log("response", response);
        });
    });
});