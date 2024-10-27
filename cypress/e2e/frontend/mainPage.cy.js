"use strict";
const frontendUrl = Cypress.env('frontendUrl');

describe ("Main page", () => {
    it ("Visit main page", () => {
        cy.visit(frontendUrl);
    });
});