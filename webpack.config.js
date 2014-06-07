module.exports = {
    entry:  './exbuild.js',
    output: {
        path: __dirname,
        filename: 'example/build.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx' },
            { test: /\.less$/, loader: 'style!css!less' }
        ]
    },
};