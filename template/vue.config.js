const path = require('path');
const {
  Configuration,
  StdoutConsoleLogger,
} = require('@microparts/configuration-js');
const packageJson = require('./package.json');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const configuration = new Configuration('./configuration');
configuration.logger = new StdoutConsoleLogger();
configuration.load();

module.exports = {
  lintOnSave: false,
  css: {
    extract: isProduction,
    sourceMap: isDevelopment,
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.json$/,
          type: 'javascript/auto',
          include: [
            path.resolve(__dirname, 'stabs'),
            path.resolve(__dirname, 'src'),
          ],
          exclude: /node_modules/,
          loader: path.resolve('./json-loader.js'),
        },
      ],
    },
  },
  chainWebpack: (config) => {
    config.output.pathinfo(isDevelopment);
    config.optimization.removeAvailableModules(!isDevelopment);
    config.devServer.disableHostCheck(true);

    config.plugin('html').tap((options) => {
      /* eslint no-shadow: 0 */
      /* eslint no-param-reassign: 0 */
      /* eslint no-underscore-dangle: 0 */

      options[0].__config = configuration.asEscapedJson();
      options[0].__stage = configuration.stage;

      return options;
    });

    config.plugin('define')
      .tap((definitions) => {
        definitions[0].VERSION = JSON.stringify(packageJson.version);
        return definitions;
      });
  },
};
