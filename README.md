# gulp.tasks

A bunch of routines in separate files, that bring a slight DRY feeling into Gulp configuration process.

## Naming rules

Every task accepts a `config` object with a set of parameters. In order to keep things nice and predictable, there are only 5 of them.

### `src`

Obviously, `gulp.src(config.src)`, as in:
```js

```

### `dest`

`.pipe(gulp.dest(config.dest))`.

### `filename`

Anything that involves renaming/creating a file. `concat` is a good example:

```js
// gulp.tasks/concat.js
// ...
return gulp.
	src(config.src).
	pipe(concat(config.filename)). // the output goes into this file
	pipe(gulp.dest(config.dest));
// ...
```

### `params`

Anything more complex than one line, think `webserver`:

```js
// gulp.tasks/webserver.js
// ...
return gulp.
	src(config.src).
	pipe(webserver(config.params)); // gulp-webserver parameters
// ...
```

### `callback`

Pass a callback into a task:

```js
// gulp.tasks/clean.js
// ...
	return function () {
		del(config.src, config.callback);
	};
// ...
```

## Usage

For more details please see `demo/`.

Let's say we have a static website built with jade and stylus. What we want to do is:

- compile jade to html
- compile stylus to css
- concatenate and compress said css

Our project structure looks like this:

```
project/
	src/
		index.jade
		main.styl
		inner.page/
			inner.page.jade
			inner.page.styl
	bower_components/
	node_modules/
	gulp.tasks/
	gulpfile.js
	bower.json
	package.json
```

Let's start with writing a `gulpfile.js` (assuming that all necessary packages are installed already):

```js
// gulpfile.js
'use strict';

var requireDir = require('require-dir');

var gulp = require('gulp');
var tasks = requireDir('./gulp.tasks/', { camelcase: true });
```

Now that we have included requireDir, gulp itself and all the tasks from `gulp.tasks/`, let's add a task that compiles jade templates:

```js
gulp.task('jade', tasks.jade({
	src:  './src/**/*.jade', // take everything from the source directory
	dest: './dist/'          // save the output in the distribution directory
}));
```

Time to generate css from our stylus files:

```js
gulp.task('stylus', tasks.stylus({
	src:  './src/**/*.styl', // take everything from the source directory
	dest: './tmp/'           // put it into a temporary directory for further concatenation
}));
```

Concatenate the css:

```js
gulp.task('concat-css', ['stylus'], tasks.concat({
	src: [
		'./tmp/main.css',
		'./tmp/inner.page/inner.page.css'
	],
	filename: 'main.css',
	dest: './tmp/main.css' // this will rewrite our rendered main.css, but we don't really need it anyway
}));
```

And compress it:

```js
gulp.task('minify-css', ['concat-css'], tasks.minifyCss({
	src: './tmp/main.css', // take the concatenated file
	dest: './dist/'        // save the output into the distribution directory
}));
```

All done, build it:
```js
gulp.task('build', ['jade', 'minify-css']);
```

After running `gulp build` we get a `dist/` directory with all the compiled and compressed stuff. That's it.
