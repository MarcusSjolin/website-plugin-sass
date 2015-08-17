module.exports = {
    updateWebpack: function (webpackConfig) {
        webpackConfig.module.loaders.push({ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' })
        return webpackConfig
    }
}