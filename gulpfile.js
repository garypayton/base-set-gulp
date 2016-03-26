var gulp 		= require('gulp'),
  	jshint 		= require('gulp-jshint'),
 	uglify 		= require('gulp-uglify'),
 	minCSS 		= require('gulp-minify-css'),
 	sourcemaps 	= require('gulp-sourcemaps');
    concat 		= require('gulp-concat');

var paths = {
	js 	: ['./app/js/sample-main.js', './app/js/sample-service.js'],
	css : ['./app/css/*.css']
};


gulp.task('lint', function(){
	return gulp.src('./dist/js/*')
		.pipe(jshint('.jshintrc')).pipe(jshint.reporter('default'))
});


gulp.task('jsBuild', function () {
       gulp.src(paths.js)
        .pipe(sourcemaps.init())
			.pipe(jshint('.jshintrc')).pipe(jshint.reporter('default'))
	        .pipe(concat('bundle.min.js'))
	        .pipe(uglify())
	    .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js/'))
});


gulp.task('cssBuild', function () {
       gulp.src(paths.css)
        .pipe(sourcemaps.init())
	        .pipe(concat('style.min.css'))
	        .pipe(minCSS({compatibility: 'ie7'}))
	    .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css/'))
});


gulp.task('build',['jsBuild', 'cssBuild']);
gulp.task('default', ['jsBuild', 'cssBuild']);
