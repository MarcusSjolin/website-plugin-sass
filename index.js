module.exports = {
    updateWebpack: function (webpackConfig) {
        webpackConfig.module.loaders.push({ test: /\.scss$/, loader: 'style!css!sass' })
        return webpackConfig
    }
}