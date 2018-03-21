var gulp = require('gulp')

gulp.task('copy', function(){
  gulp.src('./dist/**')
    .pipe(gulp.dest('../bogi_ui/dist'))
})