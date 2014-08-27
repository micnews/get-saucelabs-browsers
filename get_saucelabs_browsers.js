module.exports = function (browsers, callback) {
  browsers = browsers.map(function (browser_config) {
    if (typeof(browser_config) === 'string') {
      browser_config = browser_config.split('/')
      return {
          name: browser_config[0]
        , version: browser_config[1]
        , platform: browser_config[2]
      }
    }

    // assume it's an object
    return browser_config
  })


  require('./scout_browser')(function (err, all_browsers) {
    if (err)
      return callback(err)

    // common mappings for some of us senile folks
    all_browsers.iexplore = all_browsers['internet explorer']
    all_browsers.ie = all_browsers['internet explorer']
    all_browsers.googlechrome = all_browsers.chrome

    var to_test = require('./flatten_browser')(browsers, all_browsers)

    callback(
        null
      , to_test.map(function (browser) {
          return {
              browserName: browser.name
            , version: browser.version
            , platform: browser.platform
          }
        })
    )

  })
}