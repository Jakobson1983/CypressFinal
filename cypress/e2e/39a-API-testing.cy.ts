describe("API testing", () => {
  it("Creating a user(emulation)", function () {
    // I grab userID from request URL.
    const userID: string = "7d01de84-9527-4855-a10c-043a637178b3";
    cy.wrap(userID).as("userID");
  });

  it("Get a authorization token from the API", function () {
    cy.request("POST", `${Cypress.env("demoQA")}/account/v1/GenerateToken`, {
      userName: "test",
      password: "test1234*",
    }).then((response) => {
      const token: string = response.body.token;
      // what for shall I take wrap here?
      cy.wrap(token).as("token");
    });
  });

  it("Get the user Information", function () {
    // I need to understand this in this context.
    const userID: string = this.userID;
    const token: string = this.token;
    const authorization: string = `Bearer ${token}`;
    const options = {
        method: "GET",
        // Pls explain this to me, userID
        url: `${Cypress.env("domoQA")}/account/v1/User/${userID}`,
        headers: {
            authorization,
        },
    };
    cy.request(options).should((response) => {
      cy.log("status code is: " ).then(() => {
        expect(response.status).to.be.equal(200);
        expect(response.statusText).to.be.equal("OK");
      }); 
      cy.log("Book title").then(() => {
        expect(response.body.books[0].title).to.be.equal("Git Pocket Guide");
      }); 
      cy.log("Schema").then(() => {
        expect(response.body.username).to.be.a("string");
      }); 
    });
  });
});
