# get-saucelabs-browsers

Given browser names & versions, get webdriver compatible capabilities from saucelabs available browsers

[![NPM](https://nodei.co/npm/get-saucelabs-browsers.png?downloads&stars)](https://nodei.co/npm/get-saucelabs-browsers/)

[![NPM](https://nodei.co/npm-dl/get-saucelabs-browsers.png)](https://nodei.co/npm/get-saucelabs-browsers/)

## Kudos

Most of the code for this project is extracted from [zuul](https://www.npmjs.org/package/zuul)

## Installation

```
npm install get-saucelabs-browsers
```

## Example

### Input

```javascript
var getBrowsers = require('./get_saucelabs_browsers')

  , browsers = [
        {
            name: 'internet explorer'
          , version: '9..latest'
        }
      , {
            name: 'chrome'
          , version: 'latest'
          , platform: 'Linux'
        }
    ]
    // alternative way to describe browsers
  , browsers2 = [
        'internet explorer/9..latest'
      , 'chrome/latest/Linux'
    ]

getBrowsers(browsers, function (err, browserConfigs) {
  if (err) throw err

  console.log('browsers')
  console.log(browserConfigs)
  getBrowsers(browsers2, function (err, browserConfigs2) {
    console.log('This should be equivalent with the browsers above')
    console.log(browserConfigs2)
  })
})
```

### Output

```
browsers
[ { browserName: 'internet explorer',
    version: '9',
    platform: 'Windows 2008' },
  { browserName: 'internet explorer',
    version: '10',
    platform: 'Windows 2008' },
  { browserName: 'internet explorer',
    version: '11',
    platform: 'Windows 2012 R2' },
  { browserName: 'chrome', version: '36', platform: 'Linux' } ]
This should be equivalent with the browsers above
[ { browserName: 'internet explorer',
    version: '9',
    platform: 'Windows 2008' },
  { browserName: 'internet explorer',
    version: '10',
    platform: 'Windows 2008' },
  { browserName: 'internet explorer',
    version: '11',
    platform: 'Windows 2012 R2' },
  { browserName: 'chrome', version: '36', platform: 'Linux' } ]
```

## Licence

Copyright (c) 2014 Mic Network, Inc

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
