const gulp = require('gulp');
const concat = require('gulp-concat');//сборка файлов в один (all)
const autoprefixer = require('gulp-autoprefixer');//подстановка для кроссбраузерности
const cleanCSS = require('gulp-clean-css');//сжатие css
const uglify = require('gulp-uglify');//сжатие js
const del = require('del');//удаление всех файлов из папки build
const browserSync = require('browser-sync').create();//синхронизация браузера
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const gcmq = require('gulp-group-css-media-queries');
const less = require('gulp-less');//препроцессор less

const isDev = (process.argv.indexOf('--dev') !== -1);
const isProd = !isDev;
const isSync = (process.argv.indexOf('--sync') !== -1);

const cssFiles = [
	'./node_modules/normalize.css/normalize.css',//сброс стилей
	'./src/css/styles.css',
];//порядок сборки css файлов

const jsFiles = [
	'./src/js/lib.js',
	'./src/js/script.js',
	'./src/js/jquery-3.4.1.min.js',
	'./src/js/main.js',
];//порядок сборки js файлов

const config = {
	src: './src',
	html: {
		src: '/index.html'
	},
	css: {
		watch: '/less/**/*.less',
		src: '/less/+(styles).less',
		dest: '/css'
	}
};

function clean () {
	return del(['build/*']);
}

function img(){
	return gulp.src('./src/img/**/*')
			   .pipe(gulp.dest('./build/img'))
}

function html(){
	return gulp.src('./src/**/*.html')
			   .pipe(gulp.dest('./build'))
			   .pipe(browserSync.reload({
				stream: true
			}));
}

function styles () {
	return gulp.src(cssFiles)
		.pipe(gulpif(isDev, sourcemaps.init()))
		.pipe(concat('styles-product.css')) //.pipe(concat('all.min.css'))
		.pipe(autoprefixer({
        }))
        // .pipe(cleanCSS({
        // 	level:2 //жесткое сжатие css
		// }))
		.pipe(gulpif(isDev, sourcemaps.init()))
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream());//обновление css файлов  
}

function gless () {
	return gulp.src(config.src + config.css.src)
		.pipe(gulpif(isDev, sourcemaps.init()))
		.pipe(less())
		.pipe(gcmq())
		.pipe(autoprefixer({
        }))
		.pipe(gulp.dest(config.src + config.css.dest))
		.pipe(browserSync.reload({
			stream: true
		}));//обновление css файлов  
}

function scripts () {
	return gulp.src(jsFiles)
		//.pipe(concat('all.js')) //.pipe(concat('all.min.js'))
		// .pipe(uglify({
		// 	toplevel: false//жесткое сжатие js
		// }))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());//обновление js файлов  

}

function watch () {
	
		browserSync.init({
	        server: {
	            baseDir: "./",
			}
			// tunnel: true //использование локального сервера
	    });


	gulp.watch('./src/less/**/*.less', gless);
	gulp.watch('./src/css/**/*.css', styles);
	gulp.watch('./src/js/**/*.js', scripts);
	gulp.watch('./src/**/*.html', html);
}

function grid(done){
	delete require.cache[require.resolve('./smartgrid.js')];

	let settings = require('./smartgrid.js');
	smartgrid('./src/css', settings);

	settings.offset = '3.1%';
	settings.filename = 'smart-grid-per';
	smartgrid('./src/css', settings);

	done();
}


//запуск команд в npm
gulp.task('styles', styles);//gulp styles
gulp.task('gless', gless);//gulp gless
gulp.task('scripts', scripts);//gulp scripts
gulp.task('watch', watch);//gulp watch

gulp.task('build', gulp.series(clean, 
						gulp.parallel(styles, scripts))
);//gulp build
gulp.task('del', gulp.series('build', 'watch'));//gulp del