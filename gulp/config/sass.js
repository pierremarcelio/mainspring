'use strict';

/*************************************************************
 * Variables
 ************************************************************/
// Globals
var paths = global.paths;
global.config.sass = {
  enabled: true,
  src: paths.themeDir + '/components/_patterns/*.scss',
  watchSrc: paths.themeDir + '/components/_patterns/**/*.scss',
  dest: paths.dist_folder,
  flattenDestOutput: true,
  lint: {
    enabled: true,
    failOnError: true
  },
  sassOptions: {
    outputStyle: 'expanded',
    eyeglass: {
      enableImportOnce: false
    }
  },
  sourceComments: false,
  sourceMapEmbed: false,
  outputStyle: 'expanded',
  autoPrefixerBrowsers: [
    'last 2 versions',
    '- IE >= 9'
  ],
  includePaths: (['./node_modules']),
  docs: {
    enabled: true,
    dest: paths.dist_folder + '/sassdoc',
    verbose: false,
    sort: [
      'file',
      'group',
      'line'
    ]
  },
  sizeReport: {
    enabled: false,
    options: {
      '*': {
        'maxSize': 70000 // Alert if > Max Size in Bytes after gzip
      }
    }
  }
};
