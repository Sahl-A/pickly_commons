
## Pickly commons

This library to include all pickly common features that will be used in all microservices

### prerequisits

- semantic-release
    -- create github token: https://github.com/semantic-release/github
    -- Add the generated token as a secret in the github repo with name GH_TOKEN
    -- yarn add global semantic-release-cli
    -- in the project root directory, run the following:
    -- npx semantic-release-cli setup, it will ask questions, follow them and provide the github token then choose github actions in CI
    -- Once finished, it will add changes to package.json, e.g, add semantic release script, add it to dependencies, convert the repository url to https 
    -- Then add release.yaml inside .github/workflows as we will use github actions for our CI. 
#### helmet
