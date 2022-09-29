const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin  =  require ( "copy-webpack-plugin" ) ;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports ={
    entry: {
        home :"./src/index.js"
    }
    ,
    output:{
        filename:"js/[name].[chunkhash:5].js",
        publicPath:"/",
       
    },
    stats:{
        colors:true
    },
    devServer:{
        open:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./public/index.html",
            chunks:["home"]
        }),
        new CopyPlugin([
            { from: "./src/images", to: "./images" },
            { from: "./src/font", to: "./font" },
        ]),
        new MiniCssExtractPlugin({
            filename:'css/index.css',
            chunks:["home"],
        })
    ],
    module:{
        rules:[
            {test: /\.(less)|(css)$/,use:[MiniCssExtractPlugin.loader,{
                loader:"css-loader",
                options:{
                    modules: {
                        localIdentName: "[local]",
                        
                      },
                      url:false
                }
            },"less-loader"]},
            {test:/\.js$/,use:"babel-loader"},
        ]
    }
}