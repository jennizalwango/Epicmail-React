const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
        publicPath: '/'
    },
    devtool: 'source-maps',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: {
            disableDotRule: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'

        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', 'json']
    }
};
