beforeEach(() => {
	cy.task("resetDb");
});

it("hi", () => {
	assert.equal(1, 1);
});

it("can display a list of users", () => {
	cy.visit("/");
	cy.contains("Sery1976");
});

it("can create a user", () => {
	cy.visit("/users/create");
	cy.get("input[id=username]").type("Alex");
	cy.get("input[id=age]").type(28);
	cy.get("input[id=location]").type("London");
	cy.get("button[type=submit]").click();
	cy.contains("Alex");
});

it("can delete a user", () => {
	cy.visit("/");
	cy.get("button[aria-label='Delete Sery1976']").click();
	cy.contains("Sery1976").should("not.exist");
});
