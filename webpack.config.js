const path = require('path');

module.exports = {
    entry: './JanaTextField.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'janatextfield.bundle.js',
        library: 'JanaTextField',
        libraryTarget: 'umd'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
