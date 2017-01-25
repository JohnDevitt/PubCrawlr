

var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: {
        library: './app/scripts/app.js',
    },
    output: {
        library: 'bundle',
        libraryTarget: 'umd',
        filename: 'bundle.js',
        path: './app/dist'
    },
    devServer : {
        inline: true,
        contentBase: './app',
        port: 8100
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
