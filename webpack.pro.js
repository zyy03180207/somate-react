var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var extractCss = new ExtractTextPlugin("styles.css");
var uglifyJs = new UglifyJsPlugin({
    beautify: false,comments: false,sourceMap: true,
    compress: {warnings: false,drop_console: true,collapse_vars: true,reduce_vars: true,}
});
const nodeEnv = 'production';
module.exports = {
    entry: {
        common: ['react', 'react-dom'],
        app: './app/controller/IndexController.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'build'),

    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
        {
            test: /\.(css|less)$/,
            use: extractCss.extract({
              fallback: "style-loader",
              use: ["css-loader","less-loader"]
            })
        },
        {
            test: /\.(jpg|gif|png)?$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'url-loader?limit=8192',
            
        },
        {
            test: /\.js?$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react','stage-0'],
                plugins: ["transform-runtime"],
            }
        }
        ],
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify(nodeEnv)
            }
        }),
        extractCss,
        uglifyJs,
    ]
};
