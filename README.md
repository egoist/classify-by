# classify-by [![NPM version](https://img.shields.io/npm/v/classify-by.svg)](https://npmjs.com/package/classify-by) [![NPM downloads](https://img.shields.io/npm/dm/classify-by.svg)](https://npmjs.com/package/classify-by) [![Build Status](https://img.shields.io/circleci/project/egoist/classify-by/master.svg)](https://circleci.com/gh/egoist/classify-by)

> Classify an array by property and callback function.

## Install

```
$ npm install --save classify-by
```

## Usage

```js
const classifyBy = require('classify-by')

const data = [
	{
		text: 'hello',
		date: '2015-09-01'
	},
	{
		text: 'world',
		date: '2016-01-10'
	},
	{
		text: 'hello',
		date: '2015-09-22'
	}
]

const result = classifyBy(data, 'date', function (date) {
	return new Date(date).getFullYear()
})

result.toObject()
/*
{
	'2015': [
		{text: 'hello', date: '2015-09-01'},
		{text: 'hello', date: '2015-09-22'}
	],
	'2016': [
		{text: 'world', date: '2016-01-10'}
	]
}
*/

result.toArray()
/*
[
	[
		{text: 'hello', date: '2015-09-01'},
		{text: 'hello', date: '2015-09-22'}
	],
	[
		{text: 'world', date: '2016-01-10'}
	]
]
*/
```

## API

### classifyBy(data, [prop, cb])

#### data

Type: `array`

#### prop

The key you wanna classify by.

#### cb

```js
/**
 * @param value - data[index][prop]
 * @return the key name of each item in result
 */
```

## License

MIT © [EGOIST](https://github.com/egoist)
