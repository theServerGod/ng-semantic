var gulp = require('gulp');
var del = require('del');
var paths = require('./gulp.conf.json');
var plugins = require('gulp-load-plugins')();

var colors = plugins.util.colors;
var env = plugins.util.env;
var log = plugins.util.log;
var port = process.env.PORT || 8080;

/**
 * Use project's common gulp utils lib
 */
var common = require('./gulp/common.lib');

/**
 * Specifies where the built files should go in the project (i.e. '/build' or '/client/build')
 */
const BUILD_PATH = paths.buildClient; // jshint ignore:line

/**
 * List the available gulp tasks
 */
gulp.task('help', plugins.taskListing);

/**
 * Copy and bundle the Vendor JavaScript
 * @return {Stream}
 */
gulp.task('vendorjs', function() {
	log('Bundling, minifying, and copying the Vendor JavaScript');

	return gulp.src(paths.vendorjs)
		.pipe(plugins.concat('vendor.min.js'))
		.pipe(plugins.bytediff.start())
		.pipe(plugins.uglify())
		.pipe(plugins.bytediff.stop(common.bytediffFormatter))
		.pipe(gulp.dest(BUILD_PATH));
});

/**
 * Minify and bundle the app's JavaScript
 * @return {Stream}
 */
gulp.task('js', [], function() {
	log('Bundling, minifying, and copying the app\'s JavaScript');

	//var source = [].concat(paths.js, paths.build + 'templates.js');
	var source = [].concat(paths.js, paths.build);
	return gulp
		.src(source)
		// .pipe(plug.sourcemaps.init()) // get screwed up in the file rev process
		.pipe(plugins.concat('app.min.js'))
		.pipe(plugins.ngAnnotate({
			add: true,
			single_quotes: true
		}))
		.pipe(plugins.bytediff.start())
		.pipe(plugins.uglify({
			mangle: true
		}))
		.pipe(plugins.bytediff.stop(common.bytediffFormatter))
		// .pipe(plug.sourcemaps.write('./'))
		.pipe(gulp.dest(BUILD_PATH));
});

/**
 * Minify and bundle the Vendor CSS
 * @return {Stream}
 */
gulp.task('vendorcss', function() {
	log('Compressing, bundling, copying vendor CSS');

	var vendorFilter = plugins.filter(['**/*.css']);

	return gulp.src(paths.vendorcss)
		.pipe(vendorFilter)
		.pipe(plugins.concat('vendor.min.css'))
		.pipe(plugins.bytediff.start())
		.pipe(plugins.cleanCss({}))
		.pipe(plugins.bytediff.stop(common.bytediffFormatter))
		.pipe(gulp.dest(BUILD_PATH));
});

/**
 * Minify and bundle the app's CSS
 * @return {Stream}
 */
gulp.task('css', function() {
	log('Bundling, minifying, and copying the app\'s CSS');

	return gulp.src(paths.css)
		.pipe(plugins.concat('app.min.css')) // Before bytediff or after
		.pipe(plugins.autoprefixer('last 2 version', '> 5%'))
		.pipe(plugins.bytediff.start())
		.pipe(plugins.cleanCss({}))
		.pipe(plugins.bytediff.stop(common.bytediffFormatter))
		//        .pipe(plug.concat('all.min.css')) // Before bytediff or after
		.pipe(gulp.dest(BUILD_PATH));
});

/**
 * Copy fonts
 * @return {Stream}
 */
gulp.task('fonts', function() {
	var dest = BUILD_PATH + 'fonts';
	log('Copying fonts');
	return gulp
		.src(paths.fonts)
		.pipe(gulp.dest(dest));
});

/**
 * Copy required directories/content
 */
gulp.task('buildIncludes', function() {
	var dest = BUILD_PATH;
	log('Copying directories required for build');
	return gulp
		.src(paths.buildIncludes)
		.pipe(gulp.dest(dest));
});

/**
 * Compress images
 * @return {Stream}
 */
gulp.task('images', function() {
	var dest = BUILD_PATH + 'content/images';
	log('Compressing, caching, and copying images');
	return gulp
		.src(paths.images)
		.pipe(plugins.cache(plugins.imagemin({
			optimizationLevel: 3
		})))
		.pipe(gulp.dest(dest));
});

/**
 * Build the optimized app
 * @return {Stream}
 */
gulp.task('build', ['vendorjs', 'vendorcss', 'js', 'css', 'fonts', 'buildIncludes'], function() {
	log('Building the optimized app');

	return gulp.src('').pipe(plugins.notify({
		onLast: true,
		message: 'Deployed code!'
	}));
});

/**
 * Remove all files from the build folder
 * One way to run clean before all tasks is to run
 * from the cmd line: gulp clean && gulp build
 * @return {Stream}
 */
gulp.task('clean', function(cb) {
	log('Cleaning: ' + plugins.util.colors.blue(paths.build));

	var delPaths = [].concat(paths.build, paths.report, paths.buildClient);
	del(delPaths, cb);
});

/**
 * Watch files and perform build on file changes
 */
gulp.task('watch', function() {
	log('Watching all files');

	var css = ['gulpfile.js'].concat(paths.css, paths.vendorcss);
	var images = ['gulpfile.js'].concat(paths.images);
	var js = ['gulpfile.js'].concat(paths.js);

	gulp
		.watch(js, ['js', 'vendorjs'])
		.on('change', logWatch);

	gulp
		.watch(css, ['css', 'vendorcss'])
		.on('change', logWatch);

	gulp
		.watch(images, ['images'])
		.on('change', logWatch);

	function logWatch(event) {
		log('*** File ' + event.path + ' was ' + event.type + ', running tasks...');
	}
});

/**
 * Launch a plain server without Nodemon
 */
gulp.task('server', ['build'], function() {
	require('./server/server.js');
});
