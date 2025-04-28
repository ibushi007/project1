const path = require('path');

module.exports = {
    mode: 'production', // production
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 9000,
        open: true,
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    }
}