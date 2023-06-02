const path = require('path');
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
  }
}