var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_sass   = require('gulp-sass');


    gulp.task('combineBower', function(){
        return gulp.src([
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-environment/dist/angular-environment.js',
            'bower_components/angular-animate/angular-animate.js',
        ])
        .pipe(gp_concat('bower-components.js'))
        .pipe(gulp.dest('../public'));
    });



    gulp.task('combineApp', function(){
        return gulp.src([
            'app.js',
            'routes.js',
            'directives/*',
            'services/*',
            'filters/*',
            'controllers/*',
            'config/*'
        ])
        .pipe(gp_concat('raingauge.js'))
        .pipe(gulp.dest('../public'));
    });


    gulp.task('scss', function(){
        gulp.src('app/assets/scss/style.scss')
        .pipe(gp_sass('style.css').on('error', gp_sass.logError))
        .pipe(gulp.dest('../public'));    
    });


    gulp.task('default', ['combineBower', 'combineApp', 'scss'], function(){
        gulp.start('watch');
    });



    // Watch Files For Changes
    gulp.task('watch', function() {
        gulp.watch('**/*.js', ['combineBower', 'combineApp']);
        gulp.watch('scss/**/*.scss', ['scss']);
    });



