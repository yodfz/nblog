var webpack = require('../node_modules/webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: [
            'react-hot-loader/patch',
            // 开启 React 代码的模块热替换(HMR)

            // 'webpack-dev-server/client?http://localhost:3900',
            // 为 webpack-dev-server 的环境打包代码
            // 然后连接到指定服务器域名与端口

            'webpack/hot/only-dev-server',
            // 为热替换(HMR)打包好代码
            // only- 意味着只有成功更新运行代码才会执行热替换(HMR)
            path.join(__dirname, '../PC_client/index.js')],
        vendor: ['react', 'react-router', 'redux', 'react-redux', 'react-dom']
    },
    // 输出文件地址
    output: {
        // 生成位置
        publicPath: '/',
        path: path.join(__dirname, '/../PC_client_dist/'),
        chunkFilename: 'js/[id].[chunkhash].js',
        filename: 'js/[name].[chunkhash].js'
    },
    devtool: '#source-map',
    // 模块处理器
    module: {
        rules: [
            {
                test: /\.js[x]?/,
                exclude: /node_modules/,
                // include: path.resolve(__dirname, '../src/modules'),
                loader: 'babel-loader',
                options: {
                    //   // , 'stage-0'
                    presets: [['latest', {"modules": false}], 'stage-0', 'react'],
                    "plugins": [
                        "react-hot-loader/babel",
                        // 开启 React 代码的模块热替换(HMR)
                        "transform-object-rest-spread",
                        "transform-runtime",
                        "transform-async-to-generator",
                        "transform-decorators-legacy"
                    ]
                }
            },
            {
                // 使用了这个load 可以直接在jsx文件中import less文件
                // 如: import 'entry.less'; 将自动将样式插入
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
                // loader: "style-loader!css-loader!less-loader"
            },
            {
                //   使用了这个load 可以直接在jsx文件中import css文件
                //   如: import 'entry.css'; 将自动将样式插入
                test: /\.css/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('resource', 'img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('resource', 'fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    resolve: {
        // 默认扩展名 import 可不带后缀的文件
        extensions: ['.js', '.jsx'],
        alias: {
            'store':__dirname + '/../PC_client/store'
        }
    },
    resolveLoader: {},
    // 插件
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            {name: 'vendor', filename: 'vendor.bundle.js'}),

        new webpack.optimize.CommonsChunkPlugin(
            {name: 'manifest', filename : 'manifest.bundle.js'}),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest']
        // }),

        // 需要手动添加 HotModuleReplacementPlugin , 命令行的方式会自动添加
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

        /* 配置好Dll */
        // new webpack.DllReferencePlugin({
        //   context: path.join(__dirname, '../'), // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
        //   manifest: require(path.join(__dirname, '../') + './manifest.json'), // 指定manifest.json
        // }),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../PC_client/index.html'),
            inject: true
        })
    ],
    devServer: {
        // 热加载
        hot: true,
        // 自刷新
        inline: true
    }
};