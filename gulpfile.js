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

// gulp.watch('files-to-watch', ['tasks', 'to', 'run']);

gulp.task('default', function (callback) {
  runSequence(['browserSync', 'watch'],
    callback
  );
});

gulp.task('watch', function () {
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/*.js', browserSync.reload);
  gulp.watch('src/css/*.css', browserSync.reload);
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
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('prod'));
});

gulp.task('images', function () {
  return gulp.src('src/img/*.+(png|jpg|jpeg|gif|svg)')
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
