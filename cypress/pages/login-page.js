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


export class LoginPageThis {
    // "this template" needs constructor
    constructor() {
        this.usernameSelector = '#username';
        this.passwordSelector = '#password';
        this.submitButtonSelector = '#submit';
        this.errorSelector = '#error';
    }

    open() {
        cy.visit("/practice-test-login");
    }

    fillUsername(userName) {
        cy.get(this.usernameSelector).type(userName);
    }

    fillPassword(userPassword) {
        cy.get(this.passwordSelector).type(userPassword);
    }

    submit() {
        cy.get(this.submitButtonSelector).click();
    }

    checkInvalidUsernameError() {
        cy.get(this.errorSelector).should('have.class', 'show').and('contain', 'Your username is invalid!');
    }

    checkInvalidPasswordError() {
        cy.get(this.errorSelector).should('have.class', 'show').and('contain', 'Your password is invalid!');
    }
}



export class LoginPageThisOption {
    constructor(options) {
        this.baseURL = options.baseURL || '/'; // 提供默认值
        this.usernameSelector = options.usernameSelector || '#username';
        this.passwordSelector = options.passwordSelector || '#password';
        this.submitButtonSelector = options.submitButtonSelector || '#submit';
        this.errorSelector = options.errorSelector || '#error';
    }

    open(path = '') {
        cy.visit(`${this.baseURL}${path}`);
    }

    fillUsername(userName) {
        cy.get(this.usernameSelector).type(userName);
    }

    fillPassword(userPassword) {
        cy.get(this.passwordSelector).type(userPassword);
    }

    submit() {
        cy.get(this.submitButtonSelector).click();
    }

    checkError(message, selector = this.errorSelector) {
        cy.get(selector).should('have.class', 'show').and('contain', message);
    }
}


// 使用类
//export const loginPageThis = new LoginPageThis();
// ...

export default new LoginPage();