const path = require('path');
// import * as url from 'url';
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
console.log(__dirname);
module.exports = {
    mode: 'development',
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