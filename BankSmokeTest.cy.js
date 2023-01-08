///const { beforeEach } = require("mocha")

describe("Test suite", ()=>{

beforeEach(()=>{
        cy.visit("http://zero.webappsecurity.com")    
})

it("Validar página de inicio", ()=>{   
    cy.get('.active > img').should("be.visible")
    cy.get('#online_banking_features > :nth-child(1) > h4').contains("Online Banking")
    cy.get('.brand').should("be.visible")
    cy.get('.brand').contains("Zero Bank")
    cy.get('#signin_button').should("be.visible")
    cy.get('#signin_button').contains("Signin")
    cy.get('.nav > :nth-child(1)').should("be.visible")
    cy.get('#homeMenu > div > strong').should("be.visible")
    cy.get('#onlineBankingMenu > div > strong').should("be.visible")
    cy.get('#feedback > div > strong').should("be.visible")
    cy.get('#homeMenu > div > strong').contains("Home") 
    cy.get('#onlineBankingMenu > div').click() 
   /// cy.get('#onlineBankingMenu > div > strong').contains("ONLINE BANKING")
   //// cy.get('#feedback > div > strong').contains("FEEDBACK")
   cy.get('.hero-unit').should("be.visible")

})

it("E2E Test - found transfer", ()=>{
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select("1")
        cy.get('#tf_toAccountId').select("5")
        cy.get('#tf_amount').type("300")
        cy.get('#tf_description').type("Found transfer Test")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.board-content').should("be.visible")
        cy.get('.alert').should("be.visible")
        cy.get('.board-header').contains("Transfer Money & Make Payments - Confirm")
        cy.get('.board-content').should("be.visible")
        cy.get(':nth-child(1) > .span2 > p > strong').contains("From Account")
        cy.get(':nth-child(1) > .span3').contains("Savings")
        cy.get(':nth-child(2) > .span2 > p > strong').contains("To Account")
        cy.get(':nth-child(2) > .span3').contains("Credit Card")
        cy.get(':nth-child(3) > .span2 > p > strong').contains("Amount")
        cy.get(':nth-child(3) > .span3').contains("$ 300")


})

it("Graph update validation test", ()=>{
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#money_map_tab > a').should("be.visible")
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should("be.visible")
        cy.get('#ext-sprite-1167 > tspan').click()
        cy.get('#ext-sprite-1259').should("not.be.visible")


})


})