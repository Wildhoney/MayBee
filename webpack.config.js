require('babel-loader');

module.exports = {
    entry: {
        maybee: ['./src/maybee.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: 'maybee',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};