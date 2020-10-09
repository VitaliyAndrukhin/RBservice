//Подключаем модули галпа
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const del = require("del");
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin')

//Создаём массив с перечислением всех css файлов
const styleFiles = ["./src/scss/main.scss", "./src/scss/media.scss"];

//Создаём массив с перечислением всех js файлов
const jsFiles = ["./src/js/lib.js", "./src/js/main.js"];

//Таск на стили CSS
gulp.task('styles', () => {
  //Шаблон для поиска файлов CSS
  //Всех файлов по шаблону './scr/css/**/*.css'
  return (
    gulp
      .src(styleFiles)
      .pipe(sourcemaps.init())
      .pipe(sass())
      //Объеденение файлов в один
      .pipe(concat("style.css"))
      //Добавить префиксы
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"],
          cascade: false,
        })
      )
      //Подключаем минификатор
      // .pipe(
      //   cleanCSS({
      //     level: 2,
      //   })
      // )
      .pipe(sourcemaps.write('./'))
      //Выходная папка для стилей
      .pipe(gulp.dest("./build/css"))
      .pipe(browserSync.stream())
  );
});

//Таск на скрипты JS
gulp.task('scripts', () => {
  //Шаблон для поиска файлов JS
  //Всех файлов по шаблону './scr/js/**/*.js'
  return (
    gulp
      .src(jsFiles)
      //Объединение файлов в один
      .pipe(concat("script.js"))
      //Подключаем минификатор для JS
      // .pipe(
      //   uglify({
      //     toplevel: true,
      //   })
      // )
      //Выходная папка для скриптов
      .pipe(gulp.dest("./build/js"))
      .pipe(browserSync.stream())
  );
});

gulp.task('clean', () => {
  return del(["build/*"]);
});

//Таск сжатия изображений
gulp.task('img-compress', () => {
  return gulp.src('./src/img/**')
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest('./build/img/'))
})

//Просматривать файлы
gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    notify: false
  });
  gulp.watch('./src/img/**', gulp.series('img-compress'))
  //Следить за SCSS файлами
  gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
  //Следить за JS файлами
  gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
  //При изменении HTML запустить синхронизацию
  gulp.watch('**/*.html').on('change', browserSync.reload)
});

//Таск вызывающий функции del, styles, scripts и watch
gulp.task('default', gulp.series('clean', gulp.parallel('styles', 'scripts', 'img-compress'), 'watch'))
