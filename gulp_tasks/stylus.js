var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    concat      = require('gulp-concat'),
    stylus        = require('gulp-stylus'),
    minifyCss   = require('gulp-minify-css'),
    reload      = require('browser-sync').get('app').reload;

gulp.task('stylus', function() {
  return gulp.src(gulp.paths.stylus)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(concat('application.min.css'))
    .pipe(minifyCss({ keepSpecialComments: 0 }))
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
});
