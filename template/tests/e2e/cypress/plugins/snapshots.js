const CYPRESS_PLUGIN_SNAPSHOTS = 'cypress-plugin-snapshots';

const CONFIG = {
  [CYPRESS_PLUGIN_SNAPSHOTS]: {
    screenshotConfig: {
      blackout: [],
      capture: 'fullPage',
      clip: null,
      disableTimersAndAnimations: true,
      log: false,
      scale: false,
      timeout: 30000,
    },
  }
};

module.exports = {
  getConfig(config) {

    config.env = {
      ...config.env,
      ...CONFIG,
    };

    return {
      ...config,
    };
  }
};
