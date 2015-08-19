# # myAwesomeTheme #

This is a gulp project for simplify work with Wordpress CMS.

Is not full and is not perfect, so be free to fork and share. It will be a pleasure to see new features.

Thanks :)

# # Dependencies #

* gulp - https://www.npmjs.com/package/gulp
* browserSync - http://www.browsersync.io/docs/gulp/
* changed - https://www.npmjs.com/package/gulp-changed
* del - https://www.npmjs.com/package/del
* dirSync - https://www.npmjs.com/package/gulp-dir-sync
* dotenv - https://www.npmjs.com/package/dotenv
* gettext - https://www.npmjs.com/package/node-gettext
* gutil - https://www.npmjs.com/package/gutil
* notify - https://www.npmjs.com/package/gulp-notify
* runSequence - https://www.npmjs.com/package/run-sequence
* sass - https://www.npmjs.com/package/gulp-sass
* watch - https://www.npmjs.com/package/gulp-watch
* zip - https://www.npmjs.com/package/gulp-zip

# # Little tasks description #

* clean - remove the folder with generated dist
* browser-sync - reload browser after .scss, .php or .po modified
* styles - compile changed scss files and copy them to dist
* php - just copy php files to dist
* assets - copy assets files to dist
* languages - generate .mo files and copy .po and .mo files to dist
* sync - copy all we need from dist to wp-content folder
* snapshot - generate a .zip of dist
* watch - look on modified files, generate .scss, .php, .po and reload browser
* dist - compile .scss, .php, .po and copy them with assets to dist folder
* default - remove the folder with dist, generate dist, start broser sync and watch
