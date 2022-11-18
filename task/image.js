// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSync from "browser-sync";

// Others plugin
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpIf from "gulp-if";

// Url include
import url from "../settings/url.js";

// Option include
import option from "../settings/option.js";

// Image task
export default () => {
    return gulp.src(url.img.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "IMAGE",
            message: error.message
        }))
    }))
    .pipe(newer(url.img.dest))
    .pipe(webp())
    .pipe(gulp.dest(url.img.dest))
    .pipe(gulp.src(url.img.src))
    .pipe(newer(url.img.dest))
    .pipe(gulpIf(option.isP, imagemin(option.imagemin))) 
    .pipe(gulp.dest(url.img.dest))
    .pipe(browserSync.stream())
}

