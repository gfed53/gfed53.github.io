var gulp = require("gulp");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");


//SASS
gulp.task("sass", function(){
	return gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("css"));
});

// Image optimization task
gulp.task("images", function() {
  return gulp.src("images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("images-min"));
});

// Watch task
gulp.task("watch", function(){
	gulp.watch("scss/*", ["sass"]);
});

//Default
gulp.task("default", ["sass", "watch"]);