var path = require("path")
exports = module.exports = function websitePluginSass(website, next) {
    website.webpack.module.loaders.push ({
        test: /\.js$/,
        loader: process.cwd() + "/node_modules/website-plugin-react/node_modules/jsx-loader"
    })
    website.webpack.module.loaders.push ({
        test: /\.jsx$/,
        loader: process.cwd() + "/node_modules/website-plugin-react/node_modules/jsx-loader?insertPragma=React.DOM"
    })
    next()
}
