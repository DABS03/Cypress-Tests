describe("Test suit- OrangeHRM",()=>{

    beforeEach(()=>{
        cy.visit("https://www.deepl.com/es/translator")    
})

it("Smoke test", ()=>{ 
    cy.get('.dl_header_menu_v2__logo__img').should("be.visible")
    cy.get('#dl_menu_translator_simplified').should("be.visible")
    cy.get('.dl_header_menu__logo__text').should("be.visible")
    cy.get('.dl_translator_link_container > span') .should("be.visible")
    cy.get('.dl_header_menu_v2').should("be.visible")
    cy.get('.lmt__side_container--source > .lmt__textarea_container').should("be.visible")
    cy.get('.lmt__source_textarea').type("español")
    cy.get('.lmt__language_container > .lmt__language_select > .lmt__language_select__active > .lmt__language_select__active__title > strong').contains("español")
    cy.get('#target-dummydiv').contains("Spanish")
    cy.get('#translator-source-clear-button').click()
    cy.get('.lmt__source_textarea').type("Hello world")
    cy.get('.lmt__language_container > .lmt__language_select > .lmt__language_select__active > .lmt__language_select__active__title > strong').contains("inglés")
}) 
})