const path = require("path")
const nodeExternals = require('webpack-node-externals');
require('dotenv').config()


const { NODE_ENV } = process.env;

module.exports = {
    name: "node-board",
    mode: NODE_ENV,
    watch: NODE_ENV === 'development',
    target: "node",
    entry : "./src/app.ts",
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module : {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ]
            }
        ]
    },
    externals: [ nodeExternals() ],
}