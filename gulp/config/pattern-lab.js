'use strict';

/*************************************************************
 * Variables
 ************************************************************/
// Globals
var paths = global.paths;
global.config.patternLab = {
  enabled: true,
  path: paths.themeDir + 'pattern-lab/',
  configFile: paths.themeDir + 'pattern-lab/config/config.yml',
  watchedExtensions: (['twig', 'json', 'yaml', 'yml', 'md', 'jpg', 'jpeg', 'png']),
  scssToJson: [
    {
      src: paths.relative + 'components/_patterns/00-base/03-colors/_00-colors__vars.scss',
      dest: paths.relative + 'components/_patterns/00-base/03-colors/colors.json',
      lineStartsWith: '$',
      allowVarValues: false,
      excludeVars : [
        '$palettes'
      ]
    }
  ]
};
