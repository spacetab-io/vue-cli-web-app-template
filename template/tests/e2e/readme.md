# e2e

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

            npm test -- --record --key <GENERATED_KEY>

  - run single spec:
  
            npm test -- --spec <RELATIVE_PATH> 

## Develope Mode

Develop tests for `npm test` command with [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview):

    npm run dev

## Project Structure

```
    e2e
    ├─ cypress
    │  ├─ assets
    │  ├─ fixtures
    │  ├─ integration
    │  │  ├─ packages
    │  ├─ pages?
    │  ├─ plugins
    │  ├─ screenshots
    │  ├─ support
    │  └─ videos
    ├─ cypress.env.json
    ├─ cypress.json

```



