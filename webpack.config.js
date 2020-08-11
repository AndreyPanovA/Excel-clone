const path = require("path"); // просто для определения путей, можно и без него прописать нативно
// __dirname -  путь до текущей папки
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // чистит папку dist, удаляет лишние файлы с hash
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin"); // favicon
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css modules

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    //   Куда все складываем
    filename: "bundle.[hash].js", // добавляя hash мы получаем новую версию с hash названием, пока dist не чистится
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ["js"],
    alias: {
      // мгновенный путь через собаку к папке src и @core к src/core
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "src/core"),
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      filename: "bundle.[hash].css",
    }),
    new HTMLWebpackPlugin({
      template: "index.html", // создает шаблон для html, чтобы самостоятельно его не генерировать (создавать)
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.io"),
          to: path.resolve(__dirname, "dist"),
        },
      ], // чтобы переносить fovico
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
