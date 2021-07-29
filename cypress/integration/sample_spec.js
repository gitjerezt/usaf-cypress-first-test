describe('My First Test', function () {
	it('Gets, types, and asserts', function () {
		// Arrange - setup initial app state
		// - visit a web page
		cy.visit('https://example.cypress.io');
		// - query an element -- contains
		// Act - take an action
		// - interact with that element -- click
		cy.pause()
		cy.contains('type').click()
		// Assert - make an assertion
		// - make an assertion about page content
		cy.url()
		  .should('include','/commands/actions')
		cy.get('.action-email')
			.type('fake@email.com')
			.should('have.value','fake@email.com')
	})
})