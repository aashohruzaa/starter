// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSync from "browser-sync";

// Others plugin
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import size from "gulp-size";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import mediaQueries from "gulp-group-css-media-queries";
import csso from "gulp-csso";
import webpCss from "gulp-webp-css";
import cssImport from "gulp-cssimport";
import shorthand from "gulp-shorthand";

// Url include
import url from "../settings/url.js";

// Option include
// import option from "../settings/option.js";

// Css task
export default () => {
    return gulp.src(url.css.src,{sourcemaps: true})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "CSS",
            message: error.message
        }))
    }))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(cssImport())
    .pipe(webpCss())
    .pipe(mediaQueries())
    .pipe(concat("main.css"))
    .pipe(gulp.dest(url.css.dest,{sourcemaps: true}))
    .pipe(size({
        title: "main.css"
    }))
    .pipe(csso())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(size({
        title: "min.main.css"
    }))
    .pipe(gulp.dest(url.css.dest,{sourcemaps: true}))
    .pipe(browserSync.stream())
}

