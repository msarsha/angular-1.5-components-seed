import gulp from 'gulp';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import ngAnnotate from 'gulp-ng-annotate';
import templateCache from 'gulp-angular-templatecache';
import server from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';

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
});

gulp.task('static', () => {
	return gulp
		.src(config.paths.static)
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('scripts', ['templates'], () => {
	return gulp
		.src([
			// load modules first
			`${config.root}/**/*.module.js`,
			`${config.paths.dist}/templates.js`,
			...config.paths.scripts
		])
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('styles', () => {
	return gulp
		.src(config.paths.styles)
		.pipe(sass())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(config.paths.dist))
		.pipe(server.stream()); // make styles injected
});

gulp.task('serve', ['static', 'vendors', 'styles', 'scripts'], () => {
	server.init({
		server: {
			baseDir: './dist'
		},
		stream: true
	})

	gulp.watch([config.paths.scripts, config.paths.templates], ['watch-scripts']);
	gulp.watch([config.paths.styles], ['watch-styles']);
	gulp.watch([config.paths.static], ['watch-static']);
});

gulp.task('watch-scripts', ['scripts'], (done) => {
	server.reload();
	done();
});

gulp.task('watch-styles', ['styles'], (done) => {
	done();
});

gulp.task('watch-static', ['static'], (done)=>{
	server.reload();
	done();
})