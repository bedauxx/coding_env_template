//プラグイン
const gulp = require('gulp')
const browserSync =require('browser-sync')

//ブラウザシンクさせる対象のフォルダ
const src = 'store.workman.co.jp/'

//管理するファイルのパス
const srcDir = {
  html:[src + 'item/*.html'],//html第1階層まで
  css:[src + 'common/css/*.css', src + 'common/css/**/*.css'],//css第2階層まで
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
	gulp.watch([srcDir.html, srcDir.css], ['html', 'css'])
})
