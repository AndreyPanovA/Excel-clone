# Excel-clone
Pure JavaScript SPA
Modern Excell clone test, using vanila javaScript (oop, webpack)

Steps:
1) git init
2) git clone https://github.com/AndreyPanovA/Excel-clone.git
3) npm install
4) npm run start (development)/ npm run build (production)


Пояснение плагинов кратко {
npm install --save-dev html-webpack-plugin - полагин для webpack
npm install copy-webpack-plugin --save-dev - полагин для webpack, чтобы вытягивать favicon
npm install --save-dev clean-webpack-plugin - чистит необходимую папку
npm install --save-dev mini-css-extract-plugin - сепарирует файлы - выносить css из js  в отдельный фаил
npm install less-loader --save-dev - loader для less (преобразует js/less)
npm i -D css-loader - css loader
npm install --save-dev babel-loader @babel/core - ставим babel 
npm install @babel/preset-env --save-dev - последние нововведения в js, на сайте babel в том же разделе
npm i -D cross-env - определяет текущую операционную систему и задает системную переменную,отталкиваясь от операционки ( после мы дописываем ряд в json перед командами)

npm install webpack-dev-server --save-dev -- для мгновенного обновления, как nodemon
npm install css-minimizer-webpack-plugin --save-dev -- минификация css
npm install terser-webpack-plugin --save-dev - минификация js
npm install --save @babel/polyfill -- для того чтобы убрать ошибку с полифилами и теперь все обновляется автоматически (Can't find variable: regeneratorRuntime) решение: https://stackoverflow.com/questions/50367961/cant-find-variable-regeneratorruntime-reactnative
}


