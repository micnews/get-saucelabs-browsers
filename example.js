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

getBrowsers(browsers, function (err, browsers) {
  if (err) throw err

  console.log('browsers', browsers)
})