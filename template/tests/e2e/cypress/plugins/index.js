/* eslint-disable global-require */
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');


module.exports = (on, config) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(['tsify']);

  on('file:preprocessor', cucumber(options));

  initPlugin(on, getConfig(config));

  return config;
};
