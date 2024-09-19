const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
const { optimize } = require("webpack");

module.exports = {
    // mode: "production",

  mode: "development",
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
    splitChunks: {
      chunks: 'all',
    },
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
        type: 'asset/resource',
      },
      {
        test: /\.(mp4|webm|ogg)$/i, // Verifica se é um arquivo de vídeo
        type: 'asset/resource', // Usado para mover arquivos de mídia com Webpack 5
        generator: {
          filename: 'videos/[name][ext]', // Pasta e nome do arquivo no build
        },
      },
    ],
  },
};
