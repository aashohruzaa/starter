const urlSrc = "./app";
const urlDest = "./dist";

export default {
    ready: urlDest,
    html: {
        src: urlSrc + "/html/*.html",
        watch: urlSrc + "/html/**/*.html",
        dest: urlDest
    },
    pug: {
        src: urlSrc + "/pug/*.pug",
        watch: urlSrc + "/pug/**/*.pug",
        dest: urlDest
    },
    css: {
        src: urlSrc + "/css/*.css",
        watch: urlSrc + "/css/**/*.css",
        dest: urlDest + "/css"
    },
    scss: {
        src: urlSrc + "/scss/*.scss",
        watch: urlSrc + "/scss/**/*.scss",
        dest: urlDest + "/css"
    },
    js: {
        src: urlSrc + "/js/*.js",
        watch: urlSrc + "/js/**/*.js",
        dest: urlDest + "/js"
    },
    font: {
        src: urlSrc + "/font/*.{ttf,eot,otf,woff,woff2,svg}",
        watch: urlSrc + "/font/**/*.{ttf,eot,otf,woff,woff2,svg}",
        dest: urlDest + "/font"
    },
    img: {
        src: urlSrc + "/image/*.{png,jpeg,jpg,gif,svg,webp}",
        watch: urlSrc + "/image/**/*.{png,jpeg,jpg,gif,svg,webp}",
        dest: urlDest + "/image"
    } 
}