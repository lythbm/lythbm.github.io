// 引入 gulp
var gulp = require('gulp');

// 引入组件
var htmlmin = require('gulp-htmlmin'),    // html压缩
  imagemin = require('gulp-imagemin'),    // 图片压缩
  pngcrush = require('imagemin-pngcrush'),
  minifycss = require('gulp-minify-css'), // css压缩
  uglify = require('gulp-uglify'),        // js压缩
  notify = require('gulp-notify');        // 提示信息

// 压缩html
gulp.task('html', function() {
  return gulp
    .src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: false,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      removeAttributeQuotes: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(notify({ message: 'html task ok' }));
});

// 压缩图片
gulp.task('img', function() {
  return gulp
    .src('src/img/*')
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngcrush()]
      })
    )
    .pipe(gulp.dest('./img/'))
    .pipe(notify({ message: 'img task ok' }));
});

// 合并、压缩、重命名css
gulp.task('css', function() {
  return gulp
    .src('src/css/*.css')
    .pipe(gulp.dest('css'))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'css task ok' }));
});

// 合并、压缩js文件
gulp.task('js', function() {
  return gulp
    .src('src/js/*.js')
    .pipe(gulp.dest('js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'js task ok' }));
});

// 默认任务
gulp.task('default', function() {
  gulp.run('img', 'css', 'js', 'html');
});
