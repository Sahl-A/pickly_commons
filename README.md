[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Pickly commons

This library to include all pickly common features that will be used in all microservices

### prerequisits

- semantic-release

  1. create github token: https://github.com/semantic-release/github
  2. Add the generated token as a secret in the github repo with name GH_TOKEN
  3. npm install -g semantic-release-cli
  4. in the project root directory, run the following:
  5. semantic-release-cli setup, it will ask questions, follow them and provide the github token then choose github actions in CI
  6. Once finished, it will add changes to package.json, e.g, add semantic release script, add it to dependencies, convert the repository url to https
  7. Then add release.yaml inside .github/workflows as we will use github actions for our CI.
  8. Add configuration as releaserc.yaml in project root directory with

  ```
  branches:
  - main
  ```

- commitizen
  1. Add commitizen locally: `npm install --save-dev commitizen`
  2. Initialize the conventional changelog adapter:
     `npx commitizen init cz-conventional-changelog --save-dev --save-exact`
  3. The above command added config.commitize.path = "./node_modules/cz-conventional-changelog" in package.json
  4. add `"commit": "cz"` in scripts in package.json
  5. run `npm run commit`, it will open a dialoge to fullfill.
  6. Read more about the commit conventions:
     1. https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format
     2. https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#

#### helmet
