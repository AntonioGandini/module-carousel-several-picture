// Импортируем модуль Fail System из node.js
const { src, dest, watch } = require("gulp");

const pug = require("gulp-pug");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const browserSync = require("browser-sync").create();

function serve() {
    browserSync.init({
        server: {
            baseDir: "./",
        },
    });
}

function compilePug(cb) {
    src([
        "./src/pug/**/*.pug",
        "!./src/pug/includes/**/*.pug",
        "!./src/pug/utils/**/*.pug",
        "!./src/pug/components/**/*.pug",
        "!./src/pug/layout/**/*.pug",
        "!./src/pug/competence/**/*.pug",
    ])
        .pipe(
            pug({
                pretty: true,
            })
        )
        .pipe(dest("./"));
    cb();
}

function compileSass(cb) {
    src([
        "./src/sass/competence/index.scss",
        "!./src/sass/competence/components/**/*.scss",
        "!./src/sass/competence/layout/**/*.scss",
        "!./src/sass/competence/utils/**/*.scss",
    ])
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(csso())
        .pipe(
            autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
                cascade: false,
            })
        )
        .pipe(rename("style.css"))
        .pipe(sourcemaps.write("./"))
        .pipe(dest("./dist/css"))
        .pipe(browserSync.stream());
    cb();
}

function imageMinification(cb) {
    src("./src/img/**").pipe(newer("./img")).pipe(imagemin()).pipe(dest("./dist/img"));
    cb();
}

exports.image = imageMinification;

exports.default = function () {
    serve();
    watch("./src/pug/**/*.pug", { ignoreInitial: false }, compilePug).on(
        "change",
        browserSync.reload
    );
    watch("./src/sass/competence/**/*.scss", { ignoreInitial: false }, compileSass);
};