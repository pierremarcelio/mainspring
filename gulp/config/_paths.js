'use strict';
var path = require("path");
/*************************************************************
 * Variables
 ************************************************************/
// Local
var themeDir = process.cwd() + '/'; // Theme folder (where gulp is running)
var distFolder = 'assets';  // Output folder in theme

// Global
global.paths = {
  relative: './',
  themeDir: themeDir,
  themeDir: themeDir,
  js: [
    themeDir + '/components/_patterns/00-base/global/*.js',
    themeDir + '/components/_patterns/**/*.js',
    themeDir + '/js/**/*.js',
  ],
  sass: themeDir,
  img: themeDir + '/images',
  dist_folder: themeDir + distFolder,
  dist_js: themeDir + distFolder + '/js',
  dist_css: themeDir + distFolder + '/css',
  dist_img: themeDir + distFolder + '/img',
  dist_svg: themeDir + distFolder + '/svg'
};
