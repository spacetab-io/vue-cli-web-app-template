/* eslint-disable global-require */
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
// const retriesPlugin = require('cypress-plugin-retries/lib/plugin');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');
const reporter = require('cucumber-html-reporter');
const puppeteer = require('puppeteer');
const { getConfig } = require('./snapshots');
const appPkgJson = require('../../../../package.json');


module.exports = (on, config) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(['tsify']);

  on('file:preprocessor', cucumber(options));

  // retriesPlugin(on);
  //
  // on('before:browser:launch', (browser = {}, launchOptions) => {
  //   // `args` is an array of all the arguments that will
  //   // be passed to browsers when it launches
  //   console.log(launchOptions.args); // print all current args
  //
  //   if (browser.family === 'chrome' && browser.name !== 'electron') {
  //     // auto open devtools
  //     launchOptions.args.push([
  //       '--disable-dev-shm-usage',
  //       '--disable-site-isolation-trials',
  //       `--remote-debugging-port=${config.port}`,
  //       ]
  //     );
  //
  //     // whatever you return here becomes the launchOptions
  //     return launchOptions;
  //   }
  //
  //   if (browser.family === 'firefox') {
  //     // auto open devtools
  //     launchOptions.args.push('-devtools');
  //
  //     return launchOptions;
  //   }
  // });

  on('task', {
    connectPuppeteer: args => async () => {
      debugger;
      const browser = await puppeteer.connect({
        browserURL: `http://localhost:${config.port}`,
      });
      const page = await browser.newPage();

      await page.goto(config.baseUrl);

      console.log('-----------------------connectPuppeteer-----------------------------');
      console.log(page);
      return null;
    },
    reporter(args = null) {
      const options = {
        theme: 'bootstrap',
        ignoreBadJsonFile: true,
        jsonDir: 'cypress/cucumber-json',
        output: `${config.screenshotsFolder}/cucumber_report.html`,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
          'App Version': appPkgJson.version,
          'Test Environment': process.env.STAGE,
          baseUrl: config.baseUrl,
          Browser: process.env.OS,
          Parallel: "Scenarios",
          Executed: "Remote",
        }
      };
      reporter.generate(options);

      return null;
    }
  });

  // on('task', {
  //   failed: require('cypress-failed-log/src/failed')(),
  // });

  initPlugin(on, getConfig(config));

  console.log('-------------------------------------------');
  console.log(config);
  return config;
};
