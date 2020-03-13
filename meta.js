module.exports = {
  prompts: {
    // package.json
    name: {
      type: 'string',
      required: true,
      message: 'package.json name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'package.json description',
      default: 'Web App description'
    },

    // :)
    questionOfEternity: {
      type: 'confirm',
      message: 'Are you happy? :)'
    },

    // Libraries
    install_spacetabVueComponents: {
      type: 'confirm',
      default: false,
      message: 'Install spacetab-io/vue-components?'
    },

    // Template rendering
    need_localIcons: {
      type: 'confirm',
      message: 'Do you need local SVG icons?'
    },
    need_i18n: {
      type: 'confirm',
      message: 'Do you need i18n locales?'
    },
    need_publicDir: {
      type: 'confirm',
      message: 'Do you need default public directory?'
    },
    need_responsiveReady: {
      type: 'confirm',
      message: 'Do you need responsive ready stuff (mixins, libs)?'
    },

    // Tests
    need_tests: {
      type: 'confirm',
      message: 'Do you need tests?'
    },
    tests_baseUrl: {
      type: 'string',
      message: 'What is baseUrl (url of your project) for tests?',
      default: 'https://google.com',
    },
  },
  filters: {
    // Local icons
    'src/components/icons/**/*': 'need_localIcons',
    'src/assets/icons/**/*': 'need_localIcons',
    'utils/icon-list-generator/**/*': 'need_localIcons',

    // Locales
    'src/locales/**/*': 'need_i18n',
    'src/plugins/vue-i18n.ts': 'need_i18n',

    // Other
    'public/**/*': 'need_publicDir',
    'src/assets/scss/utilities/responsive-mixins.scss': 'need_responsiveReady',
    'src/assets/scss/variables/responsive-variables.scss': 'need_responsiveReady',

    // Tests
    'tests/**/*': 'need_tests',
  },
  skipInterpolation: [],
  completeMessage: 'To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run serve',
};
