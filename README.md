[![CircleCI](https://circleci.com/gh/rafaelaudy/habit-geek.svg?style=svg)](https://circleci.com/gh/rafaelaudy/habit-geek)

This project wants to be your go to app to improve and monitor your daily habits!
Check it out here: https://rafaelaudy.github.io/habit-geek

This is the project for the web version of the app.

## Available Scripts:

- `yarn start`
- `yarn test`
- `yarn test:functional`
- `yarn test:ci`
- `yarn build`
- `yarn deploy`

## Immediate next steps:

- Merge this and the util project so that all the UI is contained here
- Refactor and remove all login code that does not make sense anymore
- Remove APP repo
- Create AWS infraestructure for
  - Dynamo table 
  - Cognito
- Create a new serverless project that will have
  - Lambda function exposing a graphql API
    - Save week
    - Request weeks
- Refactor code to use the endpoints (only if logged in)
  - Only loads data on first page load
