const webpack = require('webpack')
const path = require('path')

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
                    'css-loader?modules&importLoaders=1',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, './src/app/scss')]
                        }
                    }
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },
};
