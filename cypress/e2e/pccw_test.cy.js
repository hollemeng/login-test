import { it } from "mocha";
import loginPage from "../pages/login-page";

describe("Login Page Test", function () {
  this.beforeEach(() => {
    cy.clearCookies();
    // TODO: check if this file exists...seems no need at all
    cy.fixture("pccw_loginPage_test.json").then((data) => {
      cy.wrap(data).as("testData");
    });
    //cy.visit("/");
    loginPage.open();


  });

  it("Happy Ending to Successful Login page", function () {
    cy.get("@testData").then((data) => {
      loginPage.fillUsername(data.loginGood.name);
      loginPage.fillPassword(data.loginGood.pwd);
      loginPage.submit();

      cy.checkSuccessfulLogin(data.loginGood.name);
    });
    cy.log("Well done! See you next time!");
  });

  it("Negative - bad user name", function () {
    cy.get("@testData").then((data) => {
      loginPage.fillUsername(data.loginBadName.name);
      loginPage.fillPassword(data.loginBadName.pwd);
      loginPage.submit();

      loginPage.checkInvalidUsernameError();
    });

    cy.log("Well done! See you next time!");
  });

  it("Negative - bad user password", function () {
    cy.get("@testData").then((data) => {
      loginPage.fillUsername(data.loginBadPwd.name);
      loginPage.fillPassword(data.loginBadPwd.pwd);
      loginPage.submit();

      loginPage.checkInvalidPasswordError();
    });

    cy.log("Well done! See you next time!");
  });
});
