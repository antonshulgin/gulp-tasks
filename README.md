# gulp.tasks

A bunch of routines in separate files, that bring a slight feeling of DRY into Gulp configuration process.

## Naming rules

In order to keep things nice and predictable, we stick to 4 basic properties.

### `src`

Obvisously, `gulp.src(...)`.

### `dest`

`.pipe(gulp.dest(...))`.

### `filename`

Anything that involves renaming/creating a file. `concat` is a good example:
```
// gulp.tasks/concat.js
...
return gulp.
	src(config.src).
	pipe(concat(config.filename)). // here we go
	pipe(gulp.dest(config.dest));
...
```

### `params`

Anything more complex than one line, think `webserver`:
```
// gulp.tasks/webserver.js
...
return gulp.
	src(config.src).
	pipe(webserver(config.params)); // gulp-webserver parameters
...
```

## Usage

For more details please see `demo/`.

Let's say we have a project built with angular, jade and stylus. What we need to do is:

- concatenate and compress javascript files
- compile jade to html
- compile stylus to css
- concatenate and compress said css

Our project structure looks like this:

```
project/
	src/
		app.jade
		app.js
		app.styl
		feature/
			feature.jade
			feature.js
			feature.styl
	bower_components/
	node_modules/
	gulp.tasks/
	gulpfile.js
	bower.json
	package.json
```

Let's start writing the `gulpfile.js` (assuming that all necessary packages are installed already):

```
// gulpfile.js
'use strict';

var requireDir = require('require-dir');

var gulp = require('gulp');
var tasks = requireDir('./gulp.tasks/', { camelcase: true });
```

Now we have included requireDir, gulp itself and all the tasks from `gulp.tasks/` are now accessible from `tasks`. Let's add a task that compiles our jade templates:

```
gulp.task('jade', tasks.jade({
	src:  './src/**/*.jade', // take everything from the source directory
	dest: './dist/'          // save the output in the distribution directory
}));
```

Time to make css from our stylus files:

```
gulp.task('stylus', tasks.stylus({
	src:  './src/**/*.styl', // take everything from the source directory
	dest: './tmp/'           // put it into a temporary directory for further concatenation
}));
```

to be continued
