import path from 'path';

module.exports = () => {
	let root = 'src';
	let paths = {
		dist: 'dist',
		scripts: [`${root}/app/**/*.js`],
		templates: [`${root}/app/**/*.html`],
		vendors: [
			`angular/angular.js`,
			`angular-ui-router/release/angular-ui-router.js`
		],
		static: [
			`${root}/index.html`
		]
	};

	let templateCache = {
		root: 'app', // setting root to avoid a template url with no directory
		standalone: true,
		transformUrl: (url) => {
			// replacing directory path with ./
			// this is done to match the templateUrl value with the one on the template cache
			return url.replace(path.dirname(url), '.');
		}
	}

	return {
		root,
		paths,
		templateCache
	};
};