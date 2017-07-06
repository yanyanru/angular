
/*这是gulp webserver*/

// var gulp = require('gulp');
// var webserver = require('gulp-webserver');

// gulp.task('webserver', function() {
//   gulp.src('www')
// 	   .pipe(webserver({
// 	   	  port:"9090",
// 	      livereload: true,
// 	      directoryListing:{
// 	      		path:"www",
// 	      		enable:true
// 	      },
// 	      open: true,
// 	      fallback:"demo.html"
// 	    }))
// })



//*这是 gulp-connect*/
// var gulp =require('gulp');
// var connect = require('gulp-connect');
// gulp.task('connect',function(){
// 	connect.server({
// 		root:"www/demo.html",
// 		livereload:true
// 	})
// })
// gulp.task('html',function(){
// 	gulp.src('./www/demo.html')
// 		.pipe(connect.reload())
// })
// gulp.task('watch',function(){
// 	gulp.watch(['./www/demo.html'],['html'])
// })
// gulp.task('defalut',['connect','watch'])



/*压缩图片*/
// var gulp = require('gulp');
// var imagemin = require('gulp-imagemin');
// //命令行输入 gulp images
// gulp.task('images',function(){
// 	//找到图片
// 	gulp.src('./images/*.*')
// 	//压缩图片
// 		.pipe(imagemin({
// 			progressive:true
// 		}))
// 	//另存图片
// 		.pipe(gulp.dest("dist/images"))
// })


// /*压缩css*/
// var gulp = require('gulp')
// var minifycss = require('gulp-minify-css');   // 获取 minify-css 模块（用于压缩 CSS）
// // 压缩 css 文件
// // 在命令行使用 gulp css 启动此任务
// gulp.task('css', function () {
// // 1. 找到文件
// gulp.src('www/teamPro1/css/*.css')
// // 2. 压缩文件
// 	.pipe(minifycss())
// 	// 3. 另存为压缩文件
// 	.pipe(gulp.dest('dist/css'))
// 	})


/*合并压缩文件*/
var gulp = require('gulp');
var rename =require('rename');
var notify=require('gulp-notify');   //提示
var concat=require('gulp-concat');
var gulp = require('gulp'),
   minifycss = require('gulp-minify-css'),
    cssmin = require('gulp-minify-css');
gulp.task('testCssmin', function () {
    gulp.src('www/teamPro1/css/*.css')
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        })).pipe(concat("all.css"))
        .pipe(gulp.dest('dist/css'));
});


  //JS合并压缩处理
    // gulp.task('minifyjs',function(){
    //     return gulp.src("js/*.js")           //选择合并的JS文件
    //         .pipe(concat('index.js'))                 //合并js
    //         .pipe(gulp.dest('dist/js'))           //输出路径  [合并文件]
    //         .pipe(rename({suffix:'.min'}))            //重命名
    //         .pipe(uglify())                           //压缩
    //         .pipe(gulp.dest('dist/js'))           //输出路径  [压缩文件]
    //         .pipe(notify({message:"js task ok"}));    //提示
    // });
	// gulp.task('minifyjs', function() {
 //       gulp.src('js/*.js')
 //          .pipe(concat('main.js'))    //合并所有js到main.js
 //          .pipe(gulp.dest('dist/js'))    //输出到文件夹
 //          .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
 //          .pipe(uglify())    //压缩
 //          .pipe(gulp.dest('dist/js'));  //输出
 //   	});
    // 压缩html文件
    var  htmlmin = require("gulp-htmlmin");
		gulp.task('testHtmlmin', function () {
			 var options = {
			 removeComments: true,                   //清除HTML注释
			 collapseWhitespace: true,               //压缩HTML
			 collapseBooleanAttributes: true,        //省略布尔属性的值      <input checked="true"/> ==> <input />
			 removeEmptyAttributes: true,            //删除所有空格作属性值  <input id="" /> ==> <input />
			 removeScriptTypeAttributes: true,       //删除<script>的type="text/javascript"
			 removeStyleLinkTypeAttributes: true,    //删除<style>和<link>的type="text/css"
			 minifyJS: true,                         //压缩页面JS
			 minifyCSS: true                         //压缩页面CSS
			 };
			 gulp.src('www/demo.html')
			 .pipe(htmlmin(options))                 //压缩html
			 .pipe(gulp.dest('dist/html'));      //输出目录  [压缩文件]
 		});
