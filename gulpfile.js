var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream({
            match: '**/*.css'
        }));
});

gulp.task('serve', ['styles'], function() {
    browserSync.init({
        open: false,
        server: {
            baseDir: './'
        }
    });

    gulp.watch('scss/*.scss', ['styles']);
    gulp.watch('js/*.js').on('change', browserSync.reload);
    gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
