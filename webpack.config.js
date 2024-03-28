const path = require('path');

module.exports = {
    entry: './components/packages/index.js', // components目录下的入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包输出目录
        filename: 'guanLibrary-ui.min.js', // 输出文件名
        library: 'guanLibrary', // 库名称
        libraryTarget: 'umd' // 库目标
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // 使用babel处理JSX
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};
