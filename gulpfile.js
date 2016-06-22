var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
	browserify('./src/todo.jsx', { debug: true })
		.transform(babelify,{presets: ["react"]})
		.bundle()
		.on("error", function (err) { console.log("Error : " + err.message); })
		.pipe(source('app.js'))
		.pipe(gulp.dest('./js/'))
});

gulp.task('watch', function() {
  gulp.watch('./src/*.jsx', ['browserify'])
});

gulp.task('default', ['browserify', 'watch']);
