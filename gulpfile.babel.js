import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import sass from 'gulp-sass';
import ngAnnotate from 'gulp-ng-annotate';
import templateCache from 'gulp-angular-templatecache';
import server from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import clean from 'gulp-clean';

import configFn from './gulpfile.config';

// gulp config
var config = configFn();

server.create();

gulp.task('templates', () => {
	return gulp
		.src(config.paths.templates)
		.pipe(templateCache(config.templateCache))
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('vendors', () => {
	return gulp
		// add node_modules path prefix
		.src(config.paths.vendors.map(i => `node_modules/${i}`))
		.pipe(concat('vendors.js'))
		.pipe(gulp.dest(config.paths.dist));
})

gulp.task('static', () => {
	return gulp
		.src(config.paths.static)
		.pipe(gulp.dest(config.paths.dist));
})

gulp.task('scripts', ['templates'], () => {
	return gulp
		.src([
			// first load the modules
			`${config.root}/**/*.module.js`,
			`${config.paths.dist}/templates.js`,
			...config.paths.scripts
		])
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.paths.dist));
})

gulp.task('serve', ['static', 'vendors', 'scripts'], () => {
	server.init({
		server: {
			baseDir: './dist'
		}
	})

	gulp.watch([config.paths.scripts, config.paths.templates], ['watch-scripts']);
})

gulp.task('watch-scripts', ['scripts'], (done) => {
	server.reload();
	done();
});