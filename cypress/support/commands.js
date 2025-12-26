Cypress.Commands.add(
  'fillMandatoryFieldsAndSubmit',
  (
    data = {
      firstName: 'John',
      lastName: 'Oliveira',
      email: 'teste@teste.com',
      text: 'test.'
    }
  ) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text, { delay: 0 })
    cy.contains('button', 'Enviar').click()
  }
)
