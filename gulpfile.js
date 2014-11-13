var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var dust = require('gulp-dust');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

var paths = {
  src: ['src/**/*.js']
  , templates: ['templates/*.dust']
  , compiledTemplates: ['dist/templates/*.js']
  , styles: ['styles/*.css']
};

gulp.task('compileTemplates', function () {
  return gulp.src(paths.templates)
    .pipe(dust())
    .pipe(gulp.dest('dist/templates'))
  ;
});

gulp.task('concatTemplates', function () {
  return gulp.src(paths.compiledTemplates)
    .pipe(concat('dust-templates.js'))
    .pipe(gulp.dest('dist'))
  ;
});

gulp.task('templates', ['compileTemplates', 'concatTemplates']);

gulp.task('minify-css', function() {
  return gulp.src(paths.styles)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('dist'))
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


gulp.task('default', ['templates', 'browserify', 'minify-css', 'watch']);
