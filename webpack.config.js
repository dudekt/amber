const webpack = require('webpack')
const path = require('path')

console.log(path.resolve(__dirname, './src/app/elements/'));


module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            './src/index',
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, './src/app/scss/')]
                        }
                    }
                ],
            },
        ],
    },
    resolve: {
        alias: {
            elements: path.resolve(__dirname, './src/app/elements/'),
        },
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },
};
