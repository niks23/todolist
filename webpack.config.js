const path = require('path');
const HtmlWbpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/

            },
            {
                test: /\.(css|sass|scss)$/,                
                    // loader: 'style-loader!css-loader!sass-loader'
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
                //     use: ExtractTextPlugin.extract({
                //     use: ['css-loader', 'sass-loader']
                // })                                       
            }
            // {
            //     test: /\.(s*)css$/,                
            //     // loader: 'style-loader!css-loader!sass-loader'
            //     use: ExtractTextPlugin.extract({
            //         use: ['css-loader', 'sass-loader']
            //     })                                    
            // }
        ]
    },
    plugins: [
        new HtmlWbpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({ filename: 'style.css'})
    ]
};

