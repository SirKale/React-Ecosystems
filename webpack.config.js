const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Rule for JS/JSX files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // Rule for CSS files
                use: ['style-loader', 'css-loader'], // First loads CSS, then injects into DOM
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Allow imports without extensions
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 3000,
        hot: true,
        devMiddleware: {
            publicPath: '/dist/',
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};

