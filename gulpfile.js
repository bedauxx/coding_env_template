//プラグイン
const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync =require('browser-sync')

//ブラウザシンクさせる対象のフォルダ
const src = './'

//管理するファイルのパス
const srcDir = {
  html:[src + '*.html'],//html第1階層まで
  css:[src + 'css/'+'*.css', src + './css/**/'+'*.css'],//css第2階層まで
  scss:[src + 'scss/'+'*.scss'],
}

//タスク
//html
gulp.task('html', () => {
  gulp.src(srcDir.html)
  .pipe(browserSync.reload({ stream:true }))
})

//css
gulp.task('css', () => {
  gulp.src(srcDir.css)
  .pipe(browserSync.reload({ stream:true }))
})

//scss
gulp.task('scss',() => {
  gulp.src(srcDir.scss)
	.pipe(browserSync.reload({ stream:true }))
})


//browser sync
gulp.task('browser-sync', () => {
  browserSync({
    server: {
       baseDir: src,
       index  : 'index.html'
    }
  })
})

//デフォルト
gulp.task('default', ['browser-sync'], () => {
	console.log();
	gulp.watch([srcDir.html, srcDir.css,srcDir.scss, ], ['html', 'css', 'scss'])
})
