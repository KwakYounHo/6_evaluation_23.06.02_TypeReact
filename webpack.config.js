const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: "./build/src/index.tsx"
  },
  output: {
    path: path.join(__dirname, "dist"),
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
      ".js", ".jsx", ".ts", ".tsx"
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./build/src/index.html"
    })
  ]
}