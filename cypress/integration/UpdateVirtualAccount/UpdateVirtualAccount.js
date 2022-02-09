import { Given } from "cypress-cucumber-preprocessor/steps"

Given('Send patch method request to server for update expiration date to {string}',
    function (expirationDate) {
    cy.requestPatchAPIToUpdateVA('Reky', 'MANDIRI', expirationDate)
        .then((responds) => {
            expect(responds.status).to.eq(200)
            expect(responds.body).has.property('expiration_date', expirationDate)
    });
});

Given(/^Send patch method request with "([^"]*)" input to server and return status (\d+)$/,
    function (invalidDate) {
    cy.requestPatchAPIToUpdateVA('Reky', 'MANDIRI', invalidDate)
        .then((responds) => {
            expect(responds.status).to.eq(400)
    });
});