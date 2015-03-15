var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('scss/app.scss')
  .pipe(sass({errLogToConsole: true}))
  .pipe(gulp.dest('public/css/'));
});

gulp.task('default', function () {
  gulp.watch("scss/**/*.scss", ['sass']);
});