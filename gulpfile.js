var gulp = require("gulp");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");


//SASS
gulp.task("sass", function(){
	return gulp.src("site/scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("site/css"));
});

// Image optimization task
gulp.task("images", function() {
  return gulp.src("site/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("site/images-min"));
});

// Watch task
gulp.task("watch", function(){
	gulp.watch("site/scss/*", ["sass"]);
});

//Default
gulp.task("default", ["sass", "watch"]);