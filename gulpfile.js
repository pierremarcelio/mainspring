'use strict';

/*************************************************************
 * Variables
 ************************************************************/
// Modules
var requireDir = require('require-dir');
var _ = {
  isObject: require('lodash/isObject'),
  defaultsDeep: require('lodash/defaultsDeep')
};
// Globals
global.config = {};

/*************************************************************
 * Operations
 ************************************************************/
requireDir('./gulp/config'); // Binds config to the global config

try {
  // Attempt to load in a local config overrides, allowing users to customize their use of the gulp tasks
  var localConfig = require('./local.gulp-config');

  if (_.isObject(localConfig)) {
    global.config = _.defaultsDeep(localConfig, global.config);
  }
} catch (e) {
}

// Time to kick things off with tasks!
require('./gulp');
