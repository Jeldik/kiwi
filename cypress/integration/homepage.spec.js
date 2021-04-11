/// <reference types="cypress" />

const { it } = require("mocha")

xdescribe('Find departures from HP', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.getBySel("acceptCookies")
            .first()
            .click({ force: true })
    })

    it.only('finds departure from Prague to Auckland', () => {
        cy.intercept("POST", "https://logg.kiwi.com/logmole").as("logmole")
        cy.getBySel("PlacePickerInput-destination")
            .type("Auckland")
        cy.wait("@logmole")
        cy.wait(2000)
        cy.getBySel("PlacePickerInput-destination")
            .type("{enter}{esc}")

        // Open in same window
        cy.getBySel("LandingSearchButton")
            .invoke('removeAttr', 'target')
            .click()
        cy.url()
            .should("include", "auckland")
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

describe('Lighthouse', () => {
    it('should run performance audits', () => {
      cy.visit('/');
      cy.lighthouse();
    });

    it()
  });