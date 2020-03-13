const fs = require('fs');
const render = require('json-templater/string');

const helpers = require('./_generator-helpers');

const importIconList = [];

fs.readdirSync(helpers.DIRECTORIES.svg).forEach(fileName => {
  if(!fileName.includes('.svg')) {
    return;
  }
  importIconList.push(render(
    `import '${helpers.LOADER_PREFIX}../../assets/icons/{{icon}}.svg';`,
    {
      icon: fileName.replace('.svg', '')
    }
  ));
});

fs.writeFile(
  helpers.DIRECTORIES.list,
  render(helpers.RENDER_TEMPLATE, {
    import: importIconList.join(helpers.EOL),
  }),
  'utf8',
  error => {
    if (error) {
      console.log(`ICON LIST GENERATOR | ERROR! \n ${error}`);
    }
    console.log(`ICON LIST GENERATOR | Icon list was generated! At: ${helpers.DIRECTORIES.list}`);
  }
);
