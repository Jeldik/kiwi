describe('Find departures from HP', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.contains("button > div > div > p", "Accept")
            .click({ force: true })
    })

    it.only('finds departure from Prague to Auckland', () => {
        cy.getBySel("PlacePickerInput-destination")
            .type("Auckland")
        cy.wait(2000)
        cy.getBySel("PlacePickerInput-destination")
            .type("{enter}{esc}")

        cy.getBySel("LandingSearchButton")
            .click()
        cy.url()
            .should("include", "auckland")
            .should("include", "prague")
    })

    it('change language', () => {
        cy.getBySel("Language-LanguageCurrent")
            .click()
        cy.contains("Čeština")
            .click()
        cy.url()
            .should("include", "cz")
    })
})