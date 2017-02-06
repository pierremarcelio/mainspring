'use strict';

/*************************************************************
 * Variables
 ************************************************************/
// Local
var themeDir = process.cwd() + '/';
// Global
global.paths = {
  relative: './',
  themeDir: themeDir,
  js: themeDir + '/components/_patterns/**/*.js',
  js_globals: themeDir + '/js/**/*.js',
  sass: themeDir,
  img: themeDir + '/images',
  dist_js: themeDir + '/assets/js',
  dist_css: themeDir + '/assets/css',
  dist_img: themeDir + '/assets/img',
  dist_svg: themeDir + '/assets/svg'
};
