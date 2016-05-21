var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    requireDir  = require('require-dir'),
    gulpsync    = require('gulp-sync')(gulp);

browserSync.create('app');

gulp.paths = {
  index_view: 'source/index.jade',
  components_views: [
    'source/features/**/*.jade',
    'source/common/**/*.jade'
  ],
  stylus: 'source/**/*.styl',
  scripts: [
    'source/*.js',
    'source/common/**/*.module.js',
    'source/features/**/*.module.js',
    'source/common/**/*.directive.js',
    'source/features/**/*.directive.js',
    'source/common/**/*.filters.js',
    'source/features/**/*.filters.js',
    'source/common/**/*.service.js',
    'source/features/**/*.service.js',
    'source/common/**/*.controller.js',
    'source/features/**/*.controller.js'
  ],

  fonts: 'source/assets/fonts/**/*',
  images: 'source/assets/images/**/*',
  libs: 'www/libs',
  dist: 'www'
};

requireDir('gulp_tasks');

gulp.task('compile', gulpsync.sync(['concat','index','jade','stylus','bower-files','assets']));
gulp.task('serve', gulpsync.sync(['compile','browsersync']));

gulp.task('default', ['serve']);
