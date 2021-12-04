/*
* Guia: https://coder-coder.com/quick-guide-to-browsersync-gulp-4/
*/
'use strict';

const { src, dest, watch, series } = require('gulp');
const sass = require("gulp-sass")(require('sass'));
const cleanCss = require("gulp-clean-css");
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

function browsersyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: '.'
        }    
    });
    cb();
}

function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}

function cssTask() {
    return src('./css/src/**/*.scss')
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(dest('./css/build'));
}

function jsTask() {
    return src('./js/src/**/*.js', { sourcemaps: true })
        .pipe(babel({
			presets: ['@babel/preset-env']
		}))
        .pipe(terser())
        .pipe(dest('./js/build/'));
}

function watchTask() {
    watch('*.html', browsersyncReload);
    watch('./css/src/**/*.scss', series(jsTask, cssTask, browsersyncReload));
}

exports.default = series(
    jsTask,
    cssTask,
    browsersyncServe,
    watchTask
);