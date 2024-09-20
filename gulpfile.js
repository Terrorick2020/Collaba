const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('autoprefixer');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');



gulp.task("preprocHtml", async () => {
    return gulp.src("./app/**/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./public"))
});

gulp.task("preprocJs", async () => {
    return gulp.src("./app/js/*.js")
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest("./public/js"))
});

// gulp.task("copyAsset", async () => {
//     return gulp.src('./app/asset/**/*')
//         .pipe(gulp.dest('./public/asset'))
// });

// gulp.task("copyFonts", async () => {
//     return gulp.src('./app/scss/fonts/**/*')
//         .pipe(gulp.dest('./public/css/fonts'))
// });

gulp.task("preprocScss", async () => {
  return gulp.src('./app/scss/*.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(plumber())
    .on('error', (err) => {
      console.error(err);
      this.emit('end');
    })
    .pipe(cleanCSS({ compatibility: 'ie8', level: { 1: { specialComments: 0 } } }))
    .pipe(notify({ message: 'SCSS processed with warnings!' }))
    .pipe(gulp.dest('./public/css'));
});


gulp.task('serve', async () => {
    browserSync.init({
        server: {
            baseDir: "./public/"
        },
        port: 3000
    });
    browserSync.watch("public/**/*").on('change', browserSync.reload);
});

gulp.task('watchFiles', async () => {
    gulp.watch("app/scss/**/*", gulp.series('preprocScss'));
    gulp.watch("app/**/*.html", gulp.series('preprocHtml'));
    // gulp.watch("app/asset/**/*", gulp.series('copyAsset'));
    gulp.watch("app/js/**/*", gulp.series('preprocJs'));
});

gulp.task('default', async () => {
    // gulp.series('copyFonts')();
    // gulp.series('copyAsset')();
    gulp.parallel('serve', 'watchFiles')();
});