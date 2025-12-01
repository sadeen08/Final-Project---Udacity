import gulp from "gulp";
import shell from "gulp-shell";

// Default task to build and serve the project with Parcel
gulp.task(
  "default",
  shell.task("parcel index.html --open")
);

// Test task to run Mocha unit tests
gulp.task(
  "test",
  shell.task("mocha")
);

// Task to run Cypress end-to-end tests
gulp.task(
  "cypress",
  shell.task("npx cypress run")
);
