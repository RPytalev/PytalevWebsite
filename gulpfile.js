'use strict';

const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
// const imagemin = require('gulp-imagemin');

function pages() {
    return src(['app/src/pages/index.pug', 'app/src/pages/studio.pug', 'app/src/pages/school.pug', 'app/src/pages/about.pug'])
    .pipe(pug( {pretty: true} ))
    .pipe(dest('app/'))
}

function scripts() {
    return src('app/src/js/script.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('app/'))
    .pipe(browserSync.stream())
}

function scriptsStudio() {
    return src('app/src/js/studio.js')
    .pipe(concat('studio.min.js'))
    .pipe(uglify())
    .pipe(dest('app/'))
    .pipe(browserSync.stream())
}

function scriptsSchool() {
    return src('app/src/js/school.js')
    .pipe(concat('school.min.js'))
    .pipe(uglify())
    .pipe(dest('app/'))
    .pipe(browserSync.stream())
}

function scriptsAbout() {
    return src('app/src/js/about.js')
    .pipe(concat('about.min.js'))
    .pipe(uglify())
    .pipe(dest('app/'))
    .pipe(browserSync.stream())
}

function styles() {
    return src('app/src/scss/*.scss')
    .pipe(sass( { outputStyle: 'compressed' } ))
    .pipe(concat('styles.min.css'))
    .pipe(autoprefixer( { overrideBrowserslist: [ 'last 10 versions' ], grid: true} ))
    .pipe(dest('app/'))
    .pipe(browserSync.stream())
} 

// function images() {
//     return src('app/src/img/src-img/**/*')
//     .pipe(imagemin())
//     .pipe(dest('app/src/img/optim-img/'))
// }

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false,
        online: true
    });
}

function watching() {
    watch('app/src/pages/*.pug').on('change', browserSync.reload);
    watch('app/src/scss/*.scss', styles);
    watch('app/src/js/scripts.js', scripts);
    watch('app/src/js/studio.js', scriptsStudio);
    watch('app/src/js/school.js', scriptsSchool);
    watch('app/src/js/about.js', scriptsAbout);
}

exports.pages = pages;
exports.scripts = scripts;
exports.scriptsStudio = scriptsStudio;
exports.scriptsSchool = scriptsSchool;
exports.scriptsAbout = scriptsAbout;
exports.styles = styles;
// exports.images = images;
exports.browsersync = browsersync;

exports.default = parallel(scripts, scriptsStudio, scriptsSchool, scriptsAbout, styles, browsersync, watching);