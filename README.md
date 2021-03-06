# eft-parser
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/ClassicOldSong/eft-parser/master/LICENSE) [![npm](https://img.shields.io/npm/dt/eft-parser.svg?style=flat-square)](https://www.npmjs.com/package/eft-parser) [![Build status](https://img.shields.io/travis/ClassicOldSong/eft-parser.svg?style=flat-square)](https://travis-ci.org/ClassicOldSong/eft-parser)

Parser for [ef.js](https://github.com/ClassicOldSong/ef.js) templates

## Usage
ES6
``` javascript
import parseEft from 'eft-parser'
// use `const parseEft = require('eft-parser')` for node.js

const template = 'Your awesome template here'
const ast = parseEft(template)
```

Browser
``` javascript
<script src="dist/eft-parser.js"></script>
<script>
	var template = 'Your awesome template here'
	var ast = parseEft(template)
</script>
```

**Note:** ef.js has a builtin parser, but if you want a faster first render, parse the templates beforehand could be better.

## Run a test
```
$ git clone https://github.com/ClassicOldSong/eft-parser.git
$ cd eft-parser
$ npm install
$ npm start
```
Then you can test it out in the opening browser window.

## Build from source
```
$ git clone https://github.com/ClassicOldSong/eft-parser.git
$ cd eft-parser
$ npm install
$ npm run build
```
Then you can get the fresh-built `ef.min.js` at the `dist` folder.

**Note:** All debugging messages are disabled in the production version

## License
[MIT](http://cos.mit-license.org/)
