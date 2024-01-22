/*
    basicUtils.js - all generic basic utils
*/


/* -- check specific url operation result, operation could be:
    - eq
    - not.eq
    - contains
    - match
    - not.contain
    - include
 */
Cypress.Commands.add("checkUrlOperation", (operation, url) => {
  cy.url().should(operation, url);
});

/* -- check whether the user login from give userName is successful
 */
Cypress.Commands.add("checkSuccessfulLogin", (userName) => {
  cy.checkUrlOperation("include", "/logged-in-successfully");
  cy.contains(`Congratulations ${userName}. You successfully logged in!`);
});



// Holle: more generic commands used before

/* -- check for text by selector data-testId
 */
Cypress.Commands.add("checkProgressByLocator", (selector, progress) => {
  cy.get(`${selector.anchorSelectorClass} ${selector.sutSelectorClass}`).should(
    "have.css",
    "width",
    progress,
  );
});

/* -- check for text by selector data-testId
 */
Cypress.Commands.add("checkTextByTestId", (testId, text) => {
  cy.get(`[data-testid="${testId}"]`)
    .contains(text, { matchCase: true })
    .should("be.visible");
});

/* -- check for text by selector data-testId
 */
Cypress.Commands.add("checkTextBySelectorTestId", (selector, text) => {
  cy
    //.get(`[data-testid="${selector.sutSelectorTestId}"]`)
    .get(`[data-testid="${selector}"]`)
    .contains(text, { matchCase: true })
    .should("be.visible");
});

/* -- check for regex by selector data-testId
 */
Cypress.Commands.add("checkRegexTextsByTestId", (testId, regex) => {
  cy.get(`[data-testid="${testId}"]`)
    .contains(regex, { matchCase: true })
    .should("be.visible");
});

/* -- check for regex by selector json
 */
Cypress.Commands.add("checkRegexTextsBySelectorJson", (selector, regex) => {
  cy.printJson(selector);
  cy.get(
    `[data-testid="${selector.anchorSelectorTestId}"]
            [data-testid="${selector.sutSelectorTestId}"]`,
  )
    .contains(regex, { matchCase: true })
    .should("be.visible");
});

/* -- check for regex by selector class
 */
Cypress.Commands.add("checkRegexTextsBySelectorPath", (selector, regex) => {
  cy.log(`selector path: ${selector}`);
  cy.get(`${selector}`)
    .contains(new RegExp(regex), { matchCase: true })
    .should("be.visible");
});

/* -- check for text by data-cy
 */
Cypress.Commands.add("checkTextByCy", (dataCy, text) => {
  cy.get(`[data-cy="${dataCy}"]`)
    .contains(text, { matchCase: true })
    .should("be.visible");
});

/* -- check for regex by data-cy
 */
Cypress.Commands.add("checkRegexTextByCy", (dataCy, regex) => {
  cy.get(`[data-testid="${dataCy}"]`)
    .contains(regex, { matchCase: true })
    .should("be.visible");
});

/* -- check for text by data-test
 */
Cypress.Commands.add("checkTextByTest", (dataTest, text) => {
  cy.get(`[data-cy="${dataTest}"]`)
    .contains(text, { matchCase: true })
    .should("be.visible");
});

/* -- check for regex by data-test
 */
Cypress.Commands.add("checkRegexTextByTest", (dataTest, regex) => {
  cy.get(`[data-testid="${dataTest}"]`)
    .contains(regex, { matchCase: true })
    .should("be.visible");
});

/* -- check for iframe by data-testid
        TODO: flaky
*/
Cypress.Commands.add("checkIframeByTestId", (testId) => {
  cy.get(`[data-testid="${testId}"] iframe`).should("be.visible");
});

/* -- type inputText by data-testid
 */
Cypress.Commands.add(
  "typeTextByTestId",
  (testId, inputText, userInputSpeed) => {
    cy.get(`[data-testid="${testId}"]`)
      .should("be.visible")
      .type(inputText, { delay: userInputSpeed })
      .should("be.visible");
  },
);

/* -- type inputText by class
 */
Cypress.Commands.add(
  "typeTextByClass",
  (classKey, inputText, userInputSpeed) => {
    cy.get(classKey)
      .click()
      .type(inputText, { delay: userInputSpeed })
      .should("be.visible");
  },
);

/* -- type inputText by selector
 */
Cypress.Commands.add("typeTextBySelector", (selector, inputText) => {
  cy.get(selector).first().click().type(inputText).should("be.visible");
});

/* -- click choice per sibling Text by selector
 */
Cypress.Commands.add("clickChoicePerTextBySelector", (selector, inputText) => {
  cy.get(selector)
    .contains(inputText, { matchCase: true })
    //.prev('.d7L4fc')
    //.should("be.visible")
    .click();
});

/* -- click button by data-testid
 */
Cypress.Commands.add("clickBtnByTestId", (testId) => {
  cy.get(`[data-testid="${testId}"]`).should("be.visible").click();
});

/* -- click button by class
 */
Cypress.Commands.add("clickBtnByClass", (classSelector, regex) => {
  cy.get(`button${classSelector}`)
    .contains(regex, { matchCase: true })
    .should("be.visible")
    .click();
});

/* -- click whatever by selector
 */
Cypress.Commands.add("clickBySelector", (selector, regex) => {
  cy.get(`${selector}`)
    .contains(regex, { matchCase: true })
    .should("be.visible")
    .click();
});

/* -- pick from option list by anchor dom
 */
Cypress.Commands.add("pickFromOptionListByClass", (classSelector) => {
  cy.get(`${classSelector}`)
    .should("be.visible")
    .find(".option-list")
    .should("be.visible")
    .find(".option-item")
    .should("be.visible")
    .click();
});

/* -- pick item from option list by data-testid
 */
Cypress.Commands.add("pickFromOptionListbyTestId", (testId, pickedItem) => {
  cy.get(`[data-testid="${testId}"]`)
    .contains(".option-item", pickedItem)
    .click();
});

/* -- get random email to bypass the email key check at server side
 */
Cypress.Commands.add("getRandomEmail", (emailbase) => {
  // TODO: 10000000000 may want to put in testData
  // base36 to afford big enough sample space to avoid duplicate
  const randomTag = Math.floor(Math.random() * 10000000000).toString(36);
  const randomEmail = `${emailbase.split("@")[0]}+${randomTag}@${
    emailbase.split("@")[1]
  }`;

  return randomEmail;
});

/* -- print single json all
 */
Cypress.Commands.add("printJson", (jsonData) => {
  try {
    Object.entries(jsonData).forEach(([key, value]) => {
      cy.log(`- ${key}: ${value}`);
    });
  } catch (error) {
    cy.log(`Error parsing jsonData, Invalid JSON format.`);
  }
});

/* -- print double json all by pair
 */
Cypress.Commands.add("printJsonQuestionPair", (texts, replies) => {
  // confirm both texts and replies are valid JSON object
  if (
    texts &&
    typeof texts === "object" &&
    replies &&
    typeof replies === "object"
  ) {
    const textKeys = Object.keys(texts);
    const replyKeys = Object.keys(replies);
    // assure texts and replies are with same number of json elements
    if (textKeys.length !== replyKeys.length) {
      cy.log(
        "testData error: texts and replies are with different number of keys",
      );
      return;
    }
    textKeys.forEach((key) => {
      const textValue = texts[key];
      const replyValue = replies[key];
      cy.log(`${key}: ${textValue} -> ${replyValue}`);
    });
  } else {
    cy.log("texts and replies have to be valid JSON objects!");
  }
});

/* -- get random integer beteween min and max
 */
Cypress.Commands.add("getRandomWordsBetween", (min, max) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  //cy.log(`randomNumber: ${randomNumber}`)
  return "Bad_Ending ".repeat(randomNumber);
});
