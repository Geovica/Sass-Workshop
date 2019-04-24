"use strict";

const
    gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync").create();

function style() {
    return (
        gulp
            .src("./sass/main.scss")
            .pipe(sass.sync().on("error", sass.logError))
            .pipe(gulp.dest("./css"))
            .pipe(browserSync.stream())
    );
}
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./src/**/*.scss", style);
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("/js/**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
