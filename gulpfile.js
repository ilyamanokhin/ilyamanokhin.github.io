const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const gcmq = require('gulp-group-css-media-queries');
const less = require('gulp-less');
const smartgrid = require('smart-grid');
const pug = require('gulp-pug');

const isDev = (process.argv.indexOf('--dev') !== -1);
const isProd = !isDev;
const isSync = (process.argv.indexOf('--sync') !== -1);


gulp.task('default', function () {
	return gulp.src('*.*', {read: false})
		.pipe(gulp.dest('./src/img'))
		.pipe(gulp.dest('./src/img/content'))
		.pipe(gulp.dest('./src/img/icons'))
		.pipe(gulp.dest('./src/fonts'))
		.pipe(gulp.dest('./src/less'))
		.pipe(gulp.dest('./src/less/blocks'))
		.pipe(gulp.dest('./src/less/smartgrid'))
		.pipe(gulp.dest('./src/less/mixins'))
		.pipe(gulp.dest('./src/less/variables'))
		.pipe(gulp.dest('./src/js'))
});


/*
let cssFiles = [
	'./node_modules/normalize.css/normalize.css',
	'./src/css/base.css',
	'./src/css/grid.css',
	'./src/css/humans.css'
];
*/
const jsFiles = [
	'./src/js/debugGridCreate.js',
	 './src/js/main.js',
];//порядок сборки js файлов

function clear(){
	return del('build/*');
}

function styles(){
	return gulp.src('./src/less/+(styles|styles-per).less')
			   .pipe(gulpif(isDev, sourcemaps.init()))
			   .pipe(less())
			   //.pipe(concat('style.css')) 
			   //.pipe(concat('all.min.css'))
			   .pipe(gcmq())
			   .pipe(autoprefixer({
				   //in package.json
		        }))
			   //.on('error', console.error.bind(console))
			   .pipe(gulpif(isProd, cleanCSS({
			   		level: 2
			   })))
			   .pipe(gulpif(isDev, sourcemaps.write()))
			   .pipe(gulp.dest('./build/css'))
			   .pipe(gulpif(isSync, browserSync.stream()));
}
function scripts () {
	 return gulp.src(jsFiles)
				.pipe(gulpif(isDev, sourcemaps.init()))
				// .pipe(concat('all.js')) 
				// .pipe(concat('all.min.js'))
				// .pipe(uglify({
				// 	toplevel: false//жесткое сжатие js
				// }))
				.pipe(gulpif(isDev, sourcemaps.write()))
				.pipe(gulp.dest('./build/js'))
				.pipe(gulpif(isSync, browserSync.stream()));
		

}

function img(){
	return gulp.src('./src/img/**/*')
			   .pipe(gulp.dest('./build/img'))
}
function fonts(){
	return gulp.src('./src/fonts/**/*')
			   .pipe(gulp.dest('./build/fonts'))
}

function html(){
	return gulp.src('./src/*.html')
			   .pipe(gulp.dest('./build'))
			   .pipe(gulpif(isSync, browserSync.stream()));
}
function pugc(){
	return gulp.src(['./src/**/*.pug','!./src/modules/*.pug','!./src/templates/*.pug'])
			.pipe(pug({pretty: '\t'}))
			.pipe(gulp.dest('./build'))
			.pipe(gulpif(isSync, browserSync.stream()));
}

function watch(){
	if(isSync){
		browserSync.init({
	        server: {
	            baseDir: "./build/",
			}
			// tunnel: true //использование локального сервера
	    });
	}

	gulp.watch('./src/less/**/*.less', styles);
	gulp.watch('./src/js/**/*.js', scripts);
	gulp.watch('./src/**/*.html', html);
	gulp.watch('./src/**/*.pug', pugc);
	gulp.watch('./smartgrid.js', grid);
}

function grid(done){
	delete require.cache[require.resolve('./smartgrid.js')];

	let settings = require('./smartgrid.js');
	smartgrid('./src/less/smartgrid', settings);

	settings.offset = '3.1%';
	settings.filename = 'smart-grid-per';
	smartgrid('./src/less/smartgrid', settings);

	done();
}



let build = gulp.series(clear, 
	gulp.parallel(styles, scripts, img, fonts, html, pugc)
);

gulp.task('build', gulp.series(grid, build));
gulp.task('watch', gulp.series(build, watch));
gulp.task('grid', grid);