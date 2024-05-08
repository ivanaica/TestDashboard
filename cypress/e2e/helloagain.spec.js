describe('Test dashboard', () => {
  beforeEach('login to application', () => {
    cy.loginToApplication()
  })
  it('hallo again', () => {
    
    cy.visit('https://dashboard.helloagain.at/#/')
    cy.contains('Customers').click()
    cy.get('[href="#/users"]').click()
    cy.get('[href="#/user/21418256"]').click()
    cy.get('[class="pull-left btn btn-primary edit-button"]').click()
    cy.get('#first_name').clear().type('Maximilian')
    cy.get ('[class="btn btn-success update-button"]').click()
    cy.get('[href="#/user/21418256"]').should('contain', 'Maximilian')


  })
})