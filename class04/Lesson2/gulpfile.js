<<<<<<< HEAD
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("default", function() {
  console.log("hello world!");
});

gulp.task("styles", function() {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./css"));
});
=======
// Dizemos que o gulp é necessario:
const gulp = require("gulp");

// Definimos a tarefa padrao:
gulp.task("default", function() {
    
});
>>>>>>> 6eb214490216cbcc9c4b4287217a371ada14441e
