exports = module.exports = function websitePluginSass(website, next) {
    website.webpack.modules = require("sass-loader")
    next(website)
}