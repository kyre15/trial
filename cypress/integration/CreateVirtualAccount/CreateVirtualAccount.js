import { Given } from "cypress-cucumber-preprocessor/steps"

Given('User {string} send post method request to create new {string} virtual account then success',
    function (name, bank) {
    cy.requestPostAPIToCreateVA(name, bank.toUpperCase())
        .then((responds) => {
            expect(responds.status).to.eq(200);
            expect(responds.body).has.property('status', 'PENDING');
            expect(responds.body).has.property('name', name);
            expect(responds.body).has.property('bank_code', bank.toUpperCase())
    });
});

Given('User send post method request to create new virtual account with uncover bank then return 400',
    function () {
    let name = "Reky";
    let uncoveredBank = "WORLD_BANK";

    cy.requestPostAPIToCreateVA(name, uncoveredBank)
        .then((responds) => {
            expect(responds.status).to.eq(400);
    });
});

Given('User send get method request to activated their virtual account',
    function () {
    cy.requestGetAPIToActivateVA('reky', 'MANDIRI')
        .then((responds) => {
            expect(responds.status).to.eq(200)
            expect(responds.body).has.property('status', 'ACTIVE')
    })
});