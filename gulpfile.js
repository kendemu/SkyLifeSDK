var gulp = require("gulp");
var babel = require("gulp-babel");

var files = [
    './index.html',
    './snap/*'
];

gulp.task("move", function(){
    gulp.src(files, {base: './' })
	.pipe(gulp.dest("./dist"))
});

gulp.task("babel", function(){
    gulp.src("./src/*.js")
	.pipe(babel())
	.pipe(gulp.dest('./dist/server'))
});

gulp.task('watch', function(){
    gulp.watch('/src/*.js', ['babel'])
});

gulp.task("dist", ['move', 'babel']);
gulp.task('default', ['dist', 'watch']);
