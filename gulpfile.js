// /guilfile.js

var gulp = require('gulp');

gulp.task('default', [], function() {
	console.log("Moving all files in src");
	gulp.src("src/src/**.*")
		.pipe(gulp.dest("dist/"));
});
