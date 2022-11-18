// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSync from "browser-sync";

// Others plugin
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpack from "webpack-stream";
import babel from "gulp-babel";

// Url include
import url from "../settings/url.js";

// Option include
import option from "../settings/option.js";

// Js task
export default () => {
    return gulp.src(url.js.src,{sourcemaps: option.isP})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JS",
            message: error.message
        }))
    }))
    .pipe(webpack({
        mode: option.isP ? "production" : "development"
    }))
    .pipe(babel())
    .pipe(gulp.dest(url.js.dest,{sourcemaps: option.isP}))
    .pipe(browserSync.stream())
}

