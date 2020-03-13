const EOL = '\n';

const DIRECTORIES = {
  svg: './src/assets/icons',
  list: './src/components/icon/_icons-list.ts',
};

const RENDER_TEMPLATE = `/* Achtung: This file could be generated automatically! Run "npm run icons:update */

/* eslint-disable */
{{import}}
`;

const LOADER_PREFIX = '!@spacetabs/svg-sprite-loader?symbolId=app-icon-[name]!';

module.exports = {
  EOL,
  DIRECTORIES,
  RENDER_TEMPLATE,
  LOADER_PREFIX,
};
