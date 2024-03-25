const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/news.html"),
      filename: "news.html",
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/photo.html"),
      filename: "photo.html",
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/rozklad.html"),
      filename: "rozklad.html",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["dist/*"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"),
          to: path.resolve(__dirname, "dist/images"),
        },
        {
          from: path.resolve(__dirname, "src/scss/style.css"),
          to: path.resolve(__dirname, "dist/scss"),
        },
        {
          from: path.resolve(__dirname, "src/scss/normalize.css"),
          to: path.resolve(__dirname, "dist/scss"),
      },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
