const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
      },
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
          },
          { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          }
        ]
      },
      resolve:{
        fallback: {
            https: require.resolve('https-browserify'),
            http: require.resolve('stream-http'),
            buffer: require.resolve('buffer'),
            url: require.resolve('url')
        }
      },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
      template: './src/index.html'
    }),
  ],
};