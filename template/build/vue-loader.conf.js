var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var isForDistribution = process.env.FOR_DISTRIBUTION === 'true'

module.exports = {
  loaders: Object.assign(
    {},
    utils.cssLoaders({
      sourceMap: isProduction
        ? config.build.productionSourceMap
        : config.dev.cssSourceMap,
      extract: isProduction && !isForDistribution
    }),
    { i18n: '@kazupon/vue-i18n-loader' }
  ),
}
