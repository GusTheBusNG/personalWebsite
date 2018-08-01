var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

const sourceHtml = 'src/*.html';
const sourceScripts = 'src/scripts/*.js';
const sourceCss = 'src/css/*.css';
const sourceImg = 'src/img/*.+(png|jpg|jpeg|gif|svg)';

const mainFiles = [sourceHtml, sourceCss, sourceScripts];

gulp.task('default', function (callback) {
  runSequence(['browserSync', 'watch'],
    callback
  );
});

gulp.task('watch', function () {
  gulp.watch(mainFiles).on('change', function () {
    browserSync.reload();
  });
});

gulp.task('build', function (callback) {
  runSequence('clean:prod',
    ['useref'/*, 'images'*/],
    callback
  );
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  });
});

gulp.task('useref', function () {
  return gulp.src(sourceHtml)
    .pipe(useref())
    .pipe(gulpIf(sourceScripts, uglify()))
    .pipe(gulpIf(sourceCss, cssnano()))
    .pipe(gulp.dest('prod'));
});

gulp.task('images', function () {
  return gulp.src(sourceImg)
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('prod/img'));
});

gulp.task('clean:prod', function () {
  return del.sync('prod');
});

gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback);
});
