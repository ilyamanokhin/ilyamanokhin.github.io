const gulp = require('gulp');
const concat = require('gulp-concat');//сборка файлов в один (all)
const autoprefixer = require('gulp-autoprefixer');//подстановка для кроссбраузерности
const cleanCSS = require('gulp-clean-css');//сжатие css
const uglify = require('gulp-uglify');//сжатие js
const del = require('del');//удаление всех файлов из папки build
const browserSync = require('browser-sync').create();//синхронизация браузера
const less = require('gulp-less');//препроцессор less
<<<<<<< HEAD
const smartgrid = require('smart-grid');//фреймворк smar-grid
const cssFiles = [
	'./node_modules/normalize.css/normalize.css',//сброс стилей
	'./build/less/styles.css',
=======
const smartgrid = require('smart-grid');//фреймворк smart-grid
const cssFiles = [
	'./node_modules/normalize.css/normalize.css',//сброс стилей
	'./src/css/some.css',
	'./src/css/other.css' ,
>>>>>>> c0f61ae61f1395cfc69490bb9bf61ecab1b20d1d
];//порядок сборки css файлов

const jsFiles = [
	'./src/js/lib.js',
<<<<<<< HEAD
	'./src/js/script.js',
=======
	'./src/js/some.js',
    './src/js/tetris.js'
>>>>>>> c0f61ae61f1395cfc69490bb9bf61ecab1b20d1d
];//порядок сборки js файлов

const config = {
	root: './src/',
	html: {
		src: 'index.html'
	},
	css: {
		watch: './less/**/*.less',
		src: 'less/+(styles).less',
		dest: './build/less'
	}
};

function styles () {
	return gulp.src(cssFiles)
<<<<<<< HEAD
		.pipe(concat('all.css')) //.pipe(concat('all.min.css'))
		.pipe(autoprefixer({
        }))
        // .pipe(cleanCSS({
        // 	level:2 //жесткое сжатие css
        // }))
=======
		.pipe(concat('all.css'))
		.pipe(autoprefixer({
            // browsers: ['> 0.1%'],//для браузеров, которые используются в мире больше 0.1%
            // cascade: false
        }))
        .pipe(cleanCSS({
        	level:2 //жесткое сжатие css
        }))
>>>>>>> c0f61ae61f1395cfc69490bb9bf61ecab1b20d1d
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream());//обновление css файлов  
}

function sless () {
	return gulp.src(config.root + config.css.src)
		.pipe(less())
		.pipe(autoprefixer({
<<<<<<< HEAD
=======
            // browsers: ['> 0.1%'],//для браузеров, которые используются в мире больше 0.1%
            // cascade: false
>>>>>>> c0f61ae61f1395cfc69490bb9bf61ecab1b20d1d
        }))
		.pipe(gulp.dest(config.css.dest))
		.pipe(browserSync.stream());//обновление css файлов  
}

function scripts () {
	return gulp.src(jsFiles)
<<<<<<< HEAD
		.pipe(concat('all.js')) //.pipe(concat('all.min.js'))
		// .pipe(uglify({
		// 	toplevel: false//жесткое сжатие js
		// }))
=======
		.pipe(concat('all.js'))
		.pipe(uglify({
			toplevel: true//жесткое сжатие js
		}))
>>>>>>> c0f61ae61f1395cfc69490bb9bf61ecab1b20d1d
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());//обновление js файлов  

}

function watch () {
	browserSync.init({
        server: {
            baseDir: "./"
        },
        // tunnel: true //использование локального сервера
    });

<<<<<<< HEAD
	// gulp.watch('./src/css/**/*.css', styles);
	gulp.watch('./src/less/**/*.less', sless);
	gulp.watch('./build/less/**/*.css', styles);
=======
	gulp.watch('./src/css/**/*.css', styles);
	gulp.watch('./src/less/**/*.less', sless);
>>>>>>> c0f61ae61f1395cfc69490bb9bf61ecab1b20d1d
	gulp.watch('./src/js/**/*.js', scripts);
	gulp.watch('./*.html', browserSync.reload);
}

function clean () {
	return del(['build/*']);
}

async function grid () {
	return smartgrid('src/less');
}

//запуск команд в npm
gulp.task('styles', styles);//gulp styles
gulp.task('sless', sless);//gulp sless
gulp.task('scripts', scripts);//gulp scripts
gulp.task('watch', watch);//gulp watch

gulp.task('build', gulp.series(clean, 
						gulp.parallel(styles, scripts))
);//gulp build
gulp.task('del', gulp.series('build', 'watch'));//gulp del

gulp.task('grid', grid);//gulp grid
