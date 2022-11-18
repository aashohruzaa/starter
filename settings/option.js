const isP = process.argv.includes("--production");
const isD = !isP;

export default {
    isP: isP,
    isD: isD,
    htmlmin:{
        collapseWhitespace: isP
    },
    imagemin: {
        verbose: isP
    }
}