'use strict';

/**
 * Gulpfile.js Require the needed packages
 * @see  https://github.com/gulpjs
 * @see  https://github.com/gulpjs/gulp/blob/master/docs/README.md
 * @see  https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md
 */
var tasks,
  requireDir = require('require-dir'),
  tasks = requireDir('./tasks');
