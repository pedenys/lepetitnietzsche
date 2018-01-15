// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = 'src'; // dossier de travail
var destination = 'dist'; // dossier à livrer

gulp.task('css', function () {
  return gulp.src(source + '/assets/css/styles.css')
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(destination + '/assets/css'));
});

// Tâche "minify" = minification CSS (destination -> destination)
gulp.task('minify', function () {
  return gulp.src(destination + '/assets/css/*.css')
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destination + '/assets/css/'));
});