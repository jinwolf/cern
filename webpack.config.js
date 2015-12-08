var path = require('path');

module.exports = {
    entry: './public/javascripts/app.jsx',
    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: 'main.js',
        publicPath: '/dist'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
}
