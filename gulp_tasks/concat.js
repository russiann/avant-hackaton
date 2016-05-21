var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    concat        = require('gulp-concat'),
    babel         = require('gulp-babel'),
    ngAnnotate    = require('gulp-ng-annotate'),
    iife          = require('gulp-iife'),
    reload        = require('browser-sync').get('app').reload;

gulp.task('concat', function() {
  return gulp.src(gulp.paths.scripts)
    .pipe(plumber())
    .pipe(iife({
      useStrict: false
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('application.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
});
