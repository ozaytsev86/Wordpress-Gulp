'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  changed = require('gulp-changed'),
  del = require('del'),
  dirSync = require('gulp-dir-sync'),
  dotenv = require('dotenv').load(),
  gettext = require('gulp-gettext'),
  gutil = require('gulp-util'),
  notify = require('gulp-notify'),
  runSequence = require('run-sequence'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  zip = require('gulp-zip'),

  themeName = process.env.THEME_NAME,
  paths = {
    theme: 'src/theme',
    dist: 'src/dist',
    styles: 'src/theme/sass/style.scss',
    php: 'src/theme/**/*.php',
    assets: 'src/theme/assets/**/*',
    languages: 'src/theme/languages/*'
  };


gulp.task('clean', function (callback) {
  var dist = paths.dist + '/' + themeName;

  del([dist], function (err) {
    if (!err) {
      gutil.log('Distribution path cleaned!');
    }
    callback(err);
  });
});


gulp.task('browser-sync',  function (callback) {
  var files = [
    './style.css',
    './**/*.php',
    './languages/*.po'
  ];

  browserSync.init(files, {
    proxy: process.env.BS_PROXY,
    notify: false
  });
  callback();
});


gulp.task('styles', function() {
  var dest = paths.dist + '/' + themeName;

  return gulp.src(paths.styles)
    .pipe(changed(dest))
    .pipe(sass())
    .pipe(gulp.dest(dest));
});


gulp.task('php', function() {
  var dest = paths.dist + '/' + themeName;

  return gulp.src(paths.php)
    .pipe(gulp.dest(dest));
});


gulp.task('assets', function() {
  var dest = paths.dist + '/' + themeName + '/assets/';

  return gulp.src(paths.assets)
    .pipe(gulp.dest(dest));
});


gulp.task('languages', function() {
  var dest = paths.dist + '/' + themeName + '/languages/';

  return gulp.src(paths.languages)
    .pipe(gulp.dest(dest))
    .pipe(gettext())
    .pipe(gulp.dest(dest));
});


//copy all we need from dist to wp-content folder
gulp.task('sync', function() {
  var source = paths.dist + '/' + themeName,
    destination = process.env.DEV_PATH + '/wp-content/themes' + '/' + themeName;

  gulp.src(source + '/**/*', {base: source})
    .pipe(watch(source, {base: source}))
    .pipe(gulp.dest(destination));
});


gulp.task('snapshot', function(){
  var source = paths.dist + '/' + themeName,
    themeZip = themeName + '.zip';

  gulp.src(source)
    .pipe(zip(themeZip))
    .pipe('.')
});


// gulp.task('deploy', function() {
//   var dist = paths.dist + '/' + themeName + '/**/*',
//     dest = process.env.DEV_PATH + '/wp-content/themes' + '/' + themeName;

//   return gulp.src(dist)
//     .pipe(gulp.dest(dest))
//     .pipe(notify({
//       onLast: true,
//       title: 'Deploy',
//       message: dest
//     }));
// });


gulp.task('watch', function () {
  var dist = paths.dist + '/' + themeName + '/**/*';
  gulp.watch(paths.styles, ['styles', 'sync']);
  gulp.watch(paths.php, ['php', 'sync']);
  gulp.watch(paths.assets, ['assets', 'sync']);
  gulp.watch(paths.languages, ['languages', 'sync']);
});

gulp.task('dist', ['styles', 'php', 'assets', 'languages'], function (callback) {
  callback();
});

gulp.task('default', function() {
  runSequence('clean', 'dist', 'browser-sync', 'watch');
});
