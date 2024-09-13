const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
const { optimize } = require("webpack");

module.exports = {
    mode: "production",

//   mode: "development",
  entry: "./src/scripts/main.js",
  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugins({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  output: {
    filename: "[name]bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|webP|avif|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
