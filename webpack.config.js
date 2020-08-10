const path = require("path"); // просто для определения путей, можно и без него прописать нативно
// __dirname -  путь до текущей папки
module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    //   Куда все складываем
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
