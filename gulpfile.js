var gulp = require("gulp");
var sass = require("gulp-sass");
const browsersync = require('browser-sync').create();
const notifier = require('node-notifier');


function showError(arg) {
  notifier.notify({
    title: 'Error',
    message: '' + arg,
    sound: 'Basso'
  });
  console.log(arg)
}
//compile 
gulp.task("sass", function () { 
	gulp.src("app/assets/scss/*.scss")
	.pipe(sass({
		outputStyle: 'expanded',
		onError: showError
	}).on("error", function(error) {
      showError(error);
      sass.logError
    })) 
	.pipe(gulp.dest("app/assets/css")); 
});

//compile and watch 
gulp.task("sass:watch", function() { 
	gulp.watch("app/assets/scss/**/*.scss", ["sass"]);
	gulp.watch('app/*.html', browsersync.reload)
});