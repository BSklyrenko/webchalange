var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('html', function() {
  gulp.src([
      './project/pages/home.pug',
      './project/pages/lecture.pug',
      './project/pages/lectures.pug'
    ])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./project'))
});

gulp.task('style', function() {
  gulp.src('./project/stylesheets/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./project'))
})

var jsSource = ['./project/js/source/jquery-3.1.1.min.js',
                './project/js/source/slick.min.js',
                './project/js/*.js'];

gulp.task('js', function() {
  gulp.src(jsSource)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./project'))
});

gulp.task('build', ['html', 'style', 'js']);

gulp.watch(['./project/stylesheets/base/*.scss',
            './project/stylesheets/pages/*.scss',
            './project/stylesheets/template/*.scss'], ['style']);

gulp.watch(['./project/pages/*.pug', './project/pages/templates/*.pug'], ['html']);
gulp.watch('./project/js/*.js', ['js']);
