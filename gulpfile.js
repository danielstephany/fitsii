'use strict'

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task('concatScrips', function() {
	return gulp.src([
		'src/js/angular.min.js',
		'src/js/angular-route.min.js',
		'src/js/app.js',
		'src/js/controllers.js',
		'src/js/filters.js'
		])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('src/js'));
});

gulp.task('minifyScripts', ['concatScrips'], function() {
	return gulp.src('src/js/main.js')
		.pipe(maps.init())
		.pipe(uglify())
		.pipe(rename("main.min.js"))
		.pipe(maps.write('./'))
		.pipe(gulp.dest('src/js'));
});

gulp.task('compileSass', function() {
	return gulp.src('src/scss/main.scss')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('src/css'));
});

gulp.task('watchSass', function() {
	gulp.watch('src/scss/**/*.scss', ['compileSass']);
});

gulp.task('watchjs', function() {
	gulp.watch('src/js/**/*.js', ['concatScrips', 'minifyScripts']);
});

gulp.task('build', ['concatScrips','minifyScripts','compileSass']);

gulp.task('default', ['build']);