describe("empty spec", () => {
  it("passes", () => {
    cy.log("HelloWorld");
  });
  it("typescript introduction", () => {
    let stringvariable: string = "9";
    let numberVariable: number = 0;
    let booleanVariable: boolean = true;
    let anyvariable: any = false;

    function add(a: number, b: number): number {
      return a + b;
    }

    interface User {
      name: string;
      password: string;
    }

    function returnUser(user: User): void {
      console.log('This is user name' +  user.name);
      console.log('This is user password' +  user.password);
    }
  })
});
