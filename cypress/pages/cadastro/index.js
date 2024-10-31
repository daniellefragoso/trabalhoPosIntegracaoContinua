class Cadastro {
    preencherFormulario(){
            const timestamp = new Date().getTime()
            const signUpName = 'Tester QA'

            Cypress.env('signUpName', signUpName)
    
            cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
            cy.get('[data-qa="signup-email"]').type(`testerQA-${timestamp}@mail.com`) 
            cy.contains('button', 'Signup').click()
    
            cy.get('input[type=radio]').last().check()
    
            cy.get('[type=password]').type('12345', {log: false})
    
            cy.get('[data-qa="days"]').select('5')
            cy.get('[data-qa="months"]').select('February')
            cy.get('[data-qa="years"]').select('2000')
    
            cy.get('input[type=checkbox]#newsletter').check()
            cy.get('input[type=checkbox]#optin').check()
    
            cy.get('[data-qa="first_name"]').type('Danielle')
            cy.get('[data-qa="last_name"]').type('Fragoso')
            cy.get('[data-qa="company"]').type('Empresa TestQA')
            cy.get('[data-qa="address"]').type('Rua Teste, 123')
            cy.get('[data-qa="country"]').select('United States')
            cy.get('[data-qa="state"]').type('Califórnia')
            cy.get('[data-qa="city"]').type('Los Angeles')
            cy.get('[data-qa="zipcode"]').type('90001')
            cy.get('[data-qa="mobile_number"]').type('111 222 333')

            cy.contains('Create Account').click()
            cy.url().should('includes','account_created')
            cy.get('[data-qa="account-created"]').should('be.visible')
            cy.get('[data-qa="continue-button"]').click()

            return this

    }

    iniciarCadastro(){
        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(`testerQA-1723167354276@mail.com`)
        cy.contains('button', 'Signup').click()

        return this
    }

    verificarSeCadastroFoiConcluido(){
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))

        return this
    }
}

export default new Cadastro()