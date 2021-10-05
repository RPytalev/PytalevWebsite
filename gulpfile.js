'use strict';

const stream = require('browser-sync');
const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "assets/"
        }
    });
});

gulp.task('pug', function() {
    return gulp.src('assets/src/pages/**.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('assets'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('scss', function() {
    return gulp.src('assets/src/scss/**.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('assets/src/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function() {
    gulp.watch('assets/src/scss/**.scss', gulp.parallel('scss'))
    gulp.watch('assets/src/pages/**.pug', gulp.parallel('pug'))
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'))