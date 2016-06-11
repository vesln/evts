[![NPM version](https://badge.fury.io/js/evts.png)](http://badge.fury.io/js/evts)
[![Build Status](https://secure.travis-ci.org/vesln/evts.png)](http://travis-ci.org/vesln/evts)
[![Coverage Status](https://coveralls.io/repos/vesln/evts/badge.png?branch=master)](https://coveralls.io/r/vesln/evts?branch=master)
[![Code Climate](https://codeclimate.com/github/vesln/evts.png)](https://codeclimate.com/github/vesln/evts)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

# evts

## Synopsis

Minimal event emitter implementation that supports both sync and async event
handlers.

## Usage

```js
var EventEmitter = require('evts');
var events = new EventEmitter;

events.on('test', function(arg) {
  // sync
});

events.on('test', function(arg, done) {
  // async
  done();
});

events.emit('test', 'something important', function() {
  // done!
});
```

## Installation

npm:

```bash
npm install evts
```

component:

```bash
component install vesln/evts
```

## Tests

### Running the tests

```bash
$ npm test
```

### Test coverage

```bash
$ npm run coverage
```

## License

(The MIT License)

Copyright (c) 2013 Veselin Todorov <hi@vesln.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
