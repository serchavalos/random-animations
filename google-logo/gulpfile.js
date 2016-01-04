var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  return gulp.src('./*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./assets/'))
  ;
});

gulp.task('sass', function() {
  return gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets'))
  ;
});

gulp.task('default', ['sass', 'uglify']);