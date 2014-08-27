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