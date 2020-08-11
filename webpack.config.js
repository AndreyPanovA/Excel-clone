const path = require("path"); // просто для определения путей, можно и без него прописать нативно
// __dirname -  путь до текущей папки
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // чистит папку dist, удаляет лишние файлы с hash
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    //   Куда все складываем
    filename: "bundle.[hash].js", // добавляя hash мы получаем новую версию с hash названием, пока dist не чистится
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "index.html", // создает шаблон для html, чтобы самостоятельно его не генерировать (создавать)
    }),
  ],
};
