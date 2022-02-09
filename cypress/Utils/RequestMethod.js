class RequestMethod {
    getMethodByRespondsID(responds) {
        return cy.request({
            method: 'GET',
            url: 'https://api.xendit.co/callback_virtual_accounts/' + responds.body.id,
            auth: {
                username: 'xnd_development_YmN54m6oZ8fRXbchop6TCzNa8veejmdeNO3agZQeJRQ3N8zu27aXcWkEi7GPfIH',
                password: ''
            },
        });
    }

    postMethod(name, bank) {
        return cy.request({
            method: 'POST',
            url: 'https://api.xendit.co/callback_virtual_accounts',
            failOnStatusCode: false,
            auth: {
                username: 'xnd_development_YmN54m6oZ8fRXbchop6TCzNa8veejmdeNO3agZQeJRQ3N8zu27aXcWkEi7GPfIH',
                password: ''
            },
            body: {
                "external_id": "va-1475804036622",
                "bank_code": bank,
                "name": name
            }
        });
    }

    patchMethod(responds, expirationDate) {
        return cy.request({
            method: 'PATCH',
            url: 'https://api.xendit.co/callback_virtual_accounts/' + responds.body.id,
            failOnStatusCode: false,
            auth: {
                username: 'xnd_development_YmN54m6oZ8fRXbchop6TCzNa8veejmdeNO3agZQeJRQ3N8zu27aXcWkEi7GPfIH',
                password: ''
            },
            body: {
                "expiration_date": expirationDate
            }
        });
    }
}

export default RequestMethod