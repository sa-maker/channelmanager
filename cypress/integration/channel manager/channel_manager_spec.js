describe('Channel Manager', () => {
    it('Successfully loads', () => {
      cy.visit('/')
      cy.contains('Channels')
    }),
    it('Can open popup', () => {

      cy.visit('/')
      cy.contains('Channels')

      cy.get('#open_channel_manager')
        .click()

      cy.contains('Channel Manager') 
      cy.get('button').click()
    })

    it('Can add channel', () => {

      cy.get('#open_channel_manager')
        .click()

      cy.contains('Channel Manager') 

      cy.get('#add_channel_name')
        .type('tmp Channel name')
        .should('have.value', 'tmp Channel name')
        .type('{enter}')
        .should('have.value', '')
      
      cy.get('button:first').click()  

      cy.contains('Apply')
        .click()   
    })

    it('Can cancel remove channel', () => {

      cy.get('#open_channel_manager')
        .click()

      cy.get('a:last').click()  

      cy.contains('Cancel')
        .click()

      cy.contains('tmp Channel name')  
    })

    it('Can remove channel', () => {

      cy.get('#open_channel_manager')
        .click()

      cy.get('a:last').click()  

      cy.contains('Apply')
        .click()

      cy.contains('tmp Channel name').should('not.exist')  
    })

  })