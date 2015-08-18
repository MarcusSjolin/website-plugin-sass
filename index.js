var path = require("path")
exports = module.exports = function websitePluginSass(website, next) {
    website.webpack.module.loaders.push ({
        test: /\.scss$/,
        loader: "../node_modules/website-plugin-sass/node_modules/style-loader!../node_modules/website-plugin-sass/node_modules/css-loader!../node_modules/website-plugin-sass/node_modules/sass-loader"
    })
    next()
}
