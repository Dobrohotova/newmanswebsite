'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var notify = require("gulp-notify");
 
gulp.task('sass', function () {
  return gulp.src('css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(cssnano())
    .pipe(gulp.dest('css'));
    .pipe(notify("Hello Gulp!"));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('css/*.scss', ['sass']);
});