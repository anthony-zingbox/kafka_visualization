'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    runSequence = require('run-sequence'),
    flatten = require('gulp-flatten');


gulp.task("copyLibJs", function() {
    gulp.src('./app/common/**/*.svg')
        .pipe(flatten())
        .pipe(gulp.dest('./build'));


});

gulp.task("copyLess", function() {
   gulp.src('./app/components/**/*.less')
       .pipe(less())
       .pipe(flatten())
       .pipe(gulp.dest('./build/css'));
});

gulp.task('ngdocs', [], function() {

    var gulpDocs = require('gulp-ngdocs');

    return gulp.src('./app/**/*.ts')
        .pipe(gulpDocs.process())
        .pipe(gulp.dest('./docs'));
});

gulp.task("build", function(cb) {
    runSequence('copyLibJs', 'copyLess', cb);
});