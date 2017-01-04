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
        .pipe(gulp.dest('app'));    


        gulp.src('app/assets/scss/embed.scss')
        .pipe(gp_sass('embed.css').on('error', gp_sass.logError))
        .pipe(gulp.dest('app'));
    });


    // gulp.task('scsss3', function(){
    //     var options = { headers: {'Cache-Control': 'max-age=315360000, no-transform, public'} }
    //     gulp.src('app/embed.css')
    //     .pipe(gp_s3(aws, options));
    // });


    // gulp.task('js_s3', function(){
    //     var options = { headers: {'Cache-Control': 'max-age=315360000, no-transform, public'} }
    //     gulp.src('app/forms.js')
    //     .pipe(gp_s3(aws, options));
    // })

    gulp.task('default', ['combineBower', 'combineApp', 'scss', 'assets'], function(){
        gulp.start('watch');
    });

    gulp.task('assets', function(){
        var options = { headers: {'Cache-Control': 'max-age=315360000, no-transform, public'} }
        gulp.src('app/forms.js');
    });


    // Watch Files For Changes
    gulp.task('watch', function() {
        gulp.watch('**/*.js', ['combineBower', 'combineApp']);
        gulp.watch('scss/**/*.scss', ['scss']);
    });



