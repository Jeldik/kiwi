import 'cypress-lighthouse';

it('performance test', () => {
    cy.lighthouse('https://google.com')
});