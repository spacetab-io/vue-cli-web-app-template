// const loaderUtils = require('loader-utils');
const jref = require('json-ref-lite');


module.exports = function jsonLoader(source) {
  // const query = loaderUtils.parseQuery(this.query);

  if (this.cacheable) this.cacheable();

  const json = jref.resolve(JSON.parse(source));
  return `module.exports = ${JSON.stringify(json)};`;
};
