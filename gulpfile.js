// control c for at stoppe funtionen, skriv "gulp" commandoen 
// for at starte funktionen igen, dette skal gøres ved nedlukning af vs code

const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const gulp = require("gulp");
const babel = require("gulp-babel");

function buildJavaScript(){
  return src("js/**/*.js")
  .pipe(babel({
    presets: ["@babel/preset-env"]
  }))
  .pipe(dest("dist"));
}

function buildStyles() {
  return src('sass/**/*.scss')
  .pipe(sass({ outputStyle: 'expanded' })) //compressed
  //   .pipe(purgecss({ content: ['*.html'] }))
  .pipe(dest('css'))
}

function watchTask() {
  watch(['sass/**/*.scss',"js/**/*.js", '*.html'], series(buildStyles, buildJavaScript));
}

exports.default = series(buildStyles,buildJavaScript, watchTask)