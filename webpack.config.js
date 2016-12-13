const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const isProduction = () => {
    return process.env.NODE_ENV === 'production';
};

module.exports = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            'babel-polyfill',
            './src/js/app.js'
        ].concat(
            isProduction() ? [] : []
        )
    },
    devtool: !isProduction() ? 'eval-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: '.webpack-cache'
                    }
                }]
            },
            {
                test: /\.s?css$/,
                // ExtractTextPlugin does not yet support webpack 2 'use' syntax
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        'css-loader?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin(isProduction() ? 'css/[name].[hash].css' : 'css/[name].css'),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(!isProduction())
        }),
        new WebpackNotifierPlugin({
            excludeWarnings: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ].concat(
        isProduction() ? [
            // production only plugins
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                }
            }),
        ] : [
            new webpack.HotModuleReplacementPlugin()
        ]
    ),
    output: {
        path: path.resolve(path.join(__dirname, 'dist')),
        publicPath: '/dist',
        chunkFilename: 'js/[name].[chunkhash].js',
        filename: isProduction() ? 'js/[name].[hash].js' : 'js/[name].js'
    }
};
