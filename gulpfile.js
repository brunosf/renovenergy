var gulp = require("gulp"),
    sass = require("gulp-sass"),
    prefix = require("gulp-autoprefixer"),
    minifyCSS = require("gulp-minify-css");
    
gulp.task('sass', function(){
    gulp.src('./css/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))        
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function(){
    gulp.watch('./css/sass/*.scss', ['sass'])
        .on('change', function(event) {
      console.log('O arquivo ' + event.path + ' foi ' + event.type + ', rodando tarefas...');
    });
});



