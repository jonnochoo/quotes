var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('public/scss/main.scss')
  .pipe(sass({errLogToConsole: true}))
  .pipe(gulp.dest('public/css/'))
  .pipe(livereload());
});

gulp.task('default', function () {
  livereload.listen();
  gulp.watch("public/scss/**/*.scss", ['sass']);
});