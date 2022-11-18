// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSync from "browser-sync";

// Others plugin
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

// Url include
import url from "../settings/url.js";

// Font task
export default () => {
    return gulp.src(url.font.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "FONT",
            message: error.message
        }))
    }))
    .pipe(newer(url.font.dest))
    .pipe(fonter({
        formats: ["woff","ttf","eot"]
    }))
    .pipe(gulp.dest(url.font.dest))
    .pipe(newer(url.font.dest))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(url.font.dest))
    .pipe(browserSync.stream())
}

