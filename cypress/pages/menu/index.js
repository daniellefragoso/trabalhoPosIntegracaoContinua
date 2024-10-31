class Menu {
    irParaProdutos() {
        cy.contains(`Products`).click()
    }

    irParaLoginCadastro() {
        cy.contains('Signup').click()
    }

}

export default new Menu()