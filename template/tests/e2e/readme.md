# tmc24 e2e

## Install

Go to `e2e` folder and run:

    cd tests/e2e
    npm i

## CI Integration

**Pipeline modes** (only run commands):

- parallel

- single  
  if you trying run commands localy: ```cd tests/e2e```
  
  - default:

            npm test    

  - with record in dashboard:

            npm test -- --record --key ca33c2b7-a4cf-47ba-bbd4-7ccf998e2bbe

     ![Run Url](cypress/assets/run-out-example.png)

## Develope Mode

Develop tests for `npm test` command with [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview):

    npm run open:test

## Project Structure

```
    e2e
    ├─ cypress
    │  ├─ assets
    │  ├─ fixtures
    │  ├─ integration
    │  │  ├─ packages
    │  │  │  └─ readme.md
    │  ├─ pages?
    │  ├─ plugins
    │  ├─ screenshots
    │  ├─ support
    │  │  └─ step_definitions
    │  └─ videos
    ├─ cypress.env.json
    ├─ cypress.json

```

## Accessibility

    About Cypress Custom Attributes

## Dashboard Access

    Create account for cypress dashboard

## Test Automation Agile

    Short instructions about test managemant and workflow

## TODO

1. Create account for cypress dashboard;
