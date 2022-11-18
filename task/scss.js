// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSync from "browser-sync";

// Others plugin
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulpSass from "gulp-sass";
import nodeSass from "sass";
import size from "gulp-size";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import mediaQueries from "gulp-group-css-media-queries";
import csso from "gulp-csso";
import webpCss from "gulp-webp-css";
import shorthand from "gulp-shorthand";
import sassGlob from "gulp-sass-glob";
import nodeImporter from "node-sass-tilde-importer";
import gulpIf from "gulp-if";
const sass = gulpSass(nodeSass);

// Url include
import url from "../settings/url.js";

// Option include
import option from "../settings/option.js";

// Scss task
export default () => {
    return gulp.src(url.scss.src,{sourcemaps: option.isP})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "SCSS",
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass({
        importer: nodeImporter
    }))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(webpCss())
    .pipe(mediaQueries())
    .pipe(gulp.dest(url.scss.dest,{sourcemaps: option.isP}))
    .pipe(size({
        title: "main.css"
    }))
    .pipe(gulpIf(option.isP,csso()))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(size({
        title: "min.main.css"
    }))
    .pipe(gulp.dest(url.scss.dest,{sourcemaps: option.isP}))
    .pipe(browserSync.stream())
}

