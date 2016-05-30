var gulp = require('gulp');
	ugilfy = require('gulp-uglify');
	rename = require("gulp-rename");
	sass = require('gulp-sass');	
	sourcemaps = require('gulp-sourcemaps');
	connect = require('gulp-connect');

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
};

gulp.task('scripts', function() {
	gulp.src('js/script.js')
	.pipe(ugilfy())
	.pipe(rename({
		'suffix':'.min'
	}))
	.pipe(gulp.dest('./js'))
	.pipe(connect.reload());
});

gulp.task('styles', function() {
	gulp.src('css/styles.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(sourcemaps.write())
	// .pipe(rename({
	// 	'suffix':'.min'
	// }))
	.pipe(gulp.dest('./css'))
	.pipe(connect.reload());
});

gulp.task('html', function () {
	gulp.src('index.html')
	.pipe(connect.reload());
});

gulp.task('connect', function() {
	connect.server({
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/*.scss', ['styles']);
	gulp.watch('index.html', ['html']);
});

gulp.task('default', ['connect', 'scripts', 'styles', 'watch']);
