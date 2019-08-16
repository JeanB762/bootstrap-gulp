var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch')
var concat = require('gulp-concat')

function style(){
    return gulp.src('scss/main.scss')
    .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
    .pipe(gulp.dest('css'))
}

function script(){
    return gulp.src([
        "./bower_components/jquery/dist/jquery.js",
        "./bower_components/bootstrap/dist/js/bootstrap.js",
        "./js/main.js"
    ])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./js/'))
}

gulp.task('watch', function(){
    gulp.watch('scss/*.scss', style);
    gulp.watch('js/main.js', script);
})



gulp.task('default', gulp.series(
    'watch'
))