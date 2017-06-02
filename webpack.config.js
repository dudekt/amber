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
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]'
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
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',

                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/app/components/'),
            elements: path.resolve(__dirname, './src/app/elements/'),
        },
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },
};
