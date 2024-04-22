const path = require('path');

module.exports = {
    optimization: {
        minimize: false,
      },
    entry:{
        app:'./client/home.jsx',
        login:'./client/login.jsx',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for both ES6 and React
                  },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // trying to debug
      },    
    devtool: 'source-map',   
    mode: 'production',
    watchOptions: {
        aggregateTimeout: 200,
    },
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: '[name]Bundle.js',
    },
};