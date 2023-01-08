describe("Test suit- OrangeHRM",()=>{

    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com")    
})

it("Validate Home Page",()=>{

    cy.get('.orangehrm-login-branding > img').should("be.visible")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible")
    cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should("be.visible")
    cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains("OrangeHRM OS 5.2")
    cy.get('.oxd-button').should("be.visible")
    cy.get('.oxd-button').contains("Login")

})

it("Add ussers",()=>{

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-autocomplete-text-input > input').click()
    cy.get('.oxd-autocomplete-text-input > input').type("oran ")
    cy.get('.oxd-autocomplete-option').should("be.visible")

    cy.get('.oxd-autocomplete-dropdown > :nth-child(2)').should("be.visible")
    cy.get('.oxd-autocomplete-dropdown > :nth-child(2)').click()
    //cy.get('.oxd-autocomplete-option > span').click()
   // cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()

   let rndnum = Math.random() *2;
    let random_num = Math.random() ;
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("DABS"+random_num.toString())
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("Password123*")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Password123*")
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-button--secondary').should("be.visible")

})

/*it('Prueba E2E para adicionar un usuario', function (){
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#btnAdd').click()
    cy.get('#systemUser_employeeName_empName').type("Alex Nikol")
    //generacion de un numero aleatorio para crear siempre un usuario distinto y omitir validacion de duplicados
    let rndnum = Math.random() *2;
    cy.get('#systemUser_userName').type("Alex0"+rndnum.toString())
    cy.get('#systemUser_password').type("Alex1234")
    cy.get('#systemUser_confirmPassword').type("Alex1234")
    cy.get('#btnSave').click()
    cy.get('#successBodyEdit').should('contain.text','Successfully Saved')
  })*/

})