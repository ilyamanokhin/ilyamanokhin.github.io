const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const gcmq = require('gulp-group-css-media-queries');
https://giant-donkey-67.localtunnel.me

const config = {
	root: './src/',
	html: {
		src: 'index.html'
	},
	css: {
		watch: 'less/**/*.less',
		src: 'less/+(styles).less',
		dest: 'css'
	}
};

gulp.task('build', function () {
	gulp.src(config.root + config.css.src)
		.pipe(less())
		.pipe(gcmq())
		.pipe(autoprefixer({
			browsers: ['> 0.1%'],
			cascade: false
		}))
		.pipe(cleanCSS({
			level:2 
		}))
		.pipe(gulp.dest(config.root + config.css.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', [browserSync],async function () {
	gulp.watch(config.root + config.css.watch, gulp.series('build'));
	gulp.watch(config.root + config.html.src, browserSync.reload);
});

gulp.task('browserSync',async function () {
	browserSync.init({
		server:{
			baseDir: config.root
		}
	});
});

gulp.task('grid',async function () {
	smartgrid('src/less', {
		container:{
			maxWidth: '1170px'
		}
	});
});