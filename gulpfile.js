var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');

gulp.task('sass', function () {
  gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./'))
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass']);