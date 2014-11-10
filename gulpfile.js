var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var dust = require('gulp-dust');

var paths = {
  src: ['src/**/*.js'],
  templates: ['templates/*.dust']
  , styles: ['styles/styles.css']
};

gulp.task('templates', function () {
  return gulp.src(paths.templates)
    .pipe(dust())
    .pipe(gulp.dest('dist/templates'))
  ;
});

gulp.task('browserify', function() {
  return browserify('./src/main.js')
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('dist'))
  ;
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['browserify'])
  , gulp.watch(paths.templates, ['templates'])
});


gulp.task('default', ['templates', 'browserify', 'watch']);