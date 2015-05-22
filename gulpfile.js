var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var tsProject = ts.createProject('tsconfig.json', {
  typescript: require('typescript'),
  sortOutput: true
});

gulp.task('compile', function() {
  return gulp.src(['src/**/*.ts', '!src/**/*.d.ts'])
    .pipe(ts(tsProject)).js
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});

gulp.task('copy', function() {
  return gulp.src('public/**/*').pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['compile']);
  gulp.watch('public/**/*', ['copy']);
});

gulp.task('default', ['compile', 'copy', 'watch']);
