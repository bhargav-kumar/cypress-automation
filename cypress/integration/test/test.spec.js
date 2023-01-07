/// <reference types="cypress" />

require('@4tw/cypress-drag-drop')

describe('visit a application', () => {
    beforeEach(() => {
      cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
    })
  
    it('displays two todo items by default', () => { 
      cy.get("#menu-ice-cream").drag("#plate-items");
    })
  
  
    

  })
  