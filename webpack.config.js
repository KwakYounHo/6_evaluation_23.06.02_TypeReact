const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: path.join(__dirname, "bundle"),
    filename: "[name].bundle.js"
  },
  devServer: {
    port: 8060,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: [/\.ts/, /\.tsx/],
        use: [
          "babel-loader",
          "ts-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      ".ts", ".tsx"
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}