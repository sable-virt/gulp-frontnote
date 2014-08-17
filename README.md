# gulp-frontnote
> gulp-frontnote plugin for [gulp](https://github.com/wearefractal/gulp)

## Required
This plugin requires

* [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-frontnote` as a development dependency:

```shell
npm install --save-dev gulp-frontnote
```

Then, add it to your `gulpfile.js`:

```javascript
var frontNote = require('gulp-frontnote');

gulp.src('src/**/*.css')
	.pipe(frontNote({
		// options
	}));
```

## Options

### options.overview
Type: `String`
Default value: `__dirname + '/styleguide.md'`

StyleGuide overview file's path.
Overview file is required Markdown format. 

### options.template
Type: `String`
Default value: `__dirname + '/template/index.html'`

StyleGuide template path. 

### options.out
Type: `String`
Default value: `./guide`

Directory in which to generate a style guide.

### options.includePath
Type: `String`
Default value: `assets/**/*`

The path of the file you want to copy the generated directory.

### options.css
Type: `String|Array`
Default value: `./style.css`

Path of CSS that you want to read in HTML. In the array or string.

### options.script
Type: `String|Array`
Default value: `null`

Path of JS that you want to read in HTML. In the array or string.

### options.verbose
Type: `Boolean`
Default value: `false`

Display a detailed log.


## Usage Examples

```javascript
var frontNote = require('gulp-frontnote');

gulp.task('doc', function() {
	gulp.src('src/**/*.css')
		.pipe(frontNote({
			out: './doc',
			template: './my-template',
			overview: './overview.md',
			includePath: 'assets/**/*'
		}));
});
```