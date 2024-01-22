class LoginPage {
    open() {
        cy.visit("/practice-test-login");
    }

    fillUsername(userName) {
        cy.get('#username').type(userName);
      }

    fillPassword(userPassword) {
        cy.get('#password').type(userPassword);
    }

    submit() {
        cy.get('#submit').click();
    }

    checkInvalidUsernameError() {
        cy.get('#error').should('have.class', 'show').and('contain', 'Your username is invalid!');
    }
    checkInvalidPasswordError() {
        cy.get('#error').should('have.class', 'show').and('contain', 'Your password is invalid!');
    }
}

export default new LoginPage();