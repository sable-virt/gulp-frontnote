# gulp-frontnote
> gulp-frontnote is [FrontNote](https://github.com/frontainer/frontnote) plugin for [gulp](https://github.com/wearefractal/gulp)

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

Options supported by [frontnote](https://github.com/frontainer/frontnote)


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