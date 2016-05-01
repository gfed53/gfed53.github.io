var gulp = require('gulp');

var imagemin = require('gulp-imagemin');

// Image optimization task
gulp.task('images', function() {
  return gulp.src('site/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('site/images-min'));
});