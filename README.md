# reactjs-sparkline

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

# reactjs-sparklines
## What are Sparklines?
Sparklines are typically small, inline data visualizations to quickly supplement text data as a way to quickly show trends and information without taking too much of the reader's attention from the text and content.

If you'd like to learn more about what sparklines are, their design and how they work, you can finding a summary, readings and documentation on them on the site of their creator, [Edward Tufte](https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR).

## How to Install
```bash
npm install reactjs-sparklines --save
```

## How to Use
### Basic Usage
```javascript
import { Sparkline } from 'reactjs-sparklines';

...

function render() {
	return (
		<p>Sparklines are great for showing quick trends in data
			<Sparkline data=[4, 8, 15, 16, 23, 42]/>
			without disrupting the flow of the document.
		</p>
	)
}

```
### Custom Theming
```javascript
import { Sparkline } from 'reactjs-sparklines';

...

function render() {
	return (
		<p>reactjs-sparklines restricts very little
			<Sparkline
				theme={sparkLineTheme}
				className="complex-sparkline"
				data=[4, 8, 15, 16, 23, 42]
			/>
			in CSS, so feel free to pass any classes in or your own themes!
		</p>
	)
}

const sparkLineTheme = {
	type: 'line',
	points: true,
	color: '#00CDCD',
	width: '2px'
};

```

<!--Running the linter
Running the test suite
How to contribute
Steps to submit a PR
How to raise issues
A link to the Code of Conduct
A changelog-->