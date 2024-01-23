
# PCCW Login Test
[![CI Tests](https://github.com/hollemeng/login-test/actions/workflows/main.yml/badge.svg)](https://github.com/hollemeng/login-test/actions/workflows/main.yml)    [![pages-build-deployment](https://github.com/hollemeng/login-test/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/hollemeng/login-test/actions/workflows/pages/pages-build-deployment)

## Usage
```
git clone https://github.com/hollemeng/login-test.git
cd login-test
npm i
npm run cypress:justGO
```
## The report from last run is hosted in Github page: 
[https://hollemeng.github.io/login-test/](https://hollemeng.github.io/login-test/)

## Others
### [CI Workflow]() examples
- `PASS` example - [Summary](https://github.com/hollemeng/login-test/actions/runs/7622351238) -> [videos](https://github.com/hollemeng/login-test/actions/runs/7622351238/artifacts/1187917395), [reports](https://github.com/hollemeng/login-test/actions/runs/7622351238/artifacts/1187917394)
- `FAIL` example - [Summary](https://github.com/hollemeng/login-test/actions/runs/7622564384) -> [videos](https://github.com/hollemeng/login-test/actions/runs/7622564384/artifacts/1187946760), [reports](https://github.com/hollemeng/login-test/actions/runs/7622564384/artifacts/1187946753) and [screenshots](https://github.com/hollemeng/login-test/actions/runs/7622564384/artifacts/1187946757)

### cucumber is not used as simple test it is
- cucumber dependency: cypress-cucumber-preprocessor

### cypress basic dir structure
```
  │  ~/space/login-test │ on   master ········································································································································· at 19:06:17  ─╮
❯ ~/bin/treeDisplay.sh . 1                                                                                                                                                                            ─╯
.
|____jsconfig.json
|____cypress
|____cypress.config.js
|____README.md
|____package-lock.json
|____package.json
|____.github
|____.git

  │  ~/space/login-test │ on   master ········································································································································· at 19:06:25  ─╮
❯ ~/bin/treeDisplay.sh cypress 1                                                                                                                                                                      ─╯
cypress
|____screenshots
|____support
|____fixtures
|____e2e
|____downloads
|____pages
```
- **fixtures** Folder - This folder contains the json files like requestBody for cy.request; staticResponse for mock api, testData for automation tests.
- **e2e** Folder - This folder contains the main scripts, xxx.js.
- **pages** Folder - This folder contains the page models which contain the page elements and action functions
- **support** Folder - This folder contains the cypress custom command file and plugin command file
- **cypress.config.js** File - This file contains all the cypress configurations
- **package.json** File - This JSON file defines all key project data, eg, metadata, dependency, script command and possible configurable options
