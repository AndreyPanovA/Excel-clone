# Excel-clone ( в работе )
Pure JavaScript SPA
Modern Excell clone test, using vanila javaScript (oop, webpack)

Steps to start:

1) git init
2) git clone https://github.com/AndreyPanovA/Excel-clone.git
3) npm install
4) npm run start (development)/ npm run build (production)


Пояснение плагинов кратко:

1) npm install --save-dev html-webpack-plugin - полагин для webpack
2) npm install copy-webpack-plugin --save-dev - полагин для webpack, чтобы вытягивать favicon
3) npm install --save-dev clean-webpack-plugin - чистит необходимую папку
4) npm install --save-dev mini-css-extract-plugin - сепарирует файлы - выносить css из js  в отдельный фаил
5) npm install less-loader --save-dev - loader для less (преобразует js/less)
6) npm i -D css-loader - css loader
7) npm install --save-dev babel-loader @babel/core - ставим babel 
8) npm install @babel/preset-env --save-dev - последние нововведения в js, на сайте babel в том же разделе
9) npm i -D cross-env - определяет текущую операционную систему и задает системную переменную,отталкиваясь от операционки ( после мы дописываем ряд в json перед командами)

10) npm install webpack-dev-server --save-dev -- для мгновенного обновления, как nodemon
11) npm install css-minimizer-webpack-plugin --save-dev -- минификация css
12) npm install terser-webpack-plugin --save-dev - минификация js
13) npm install --save @babel/polyfill -- для того чтобы убрать ошибку с полифилами и теперь все обновляется автоматически (Can't find variable: regeneratorRuntime) решение: https://stackoverflow.com/questions/50367961/cant-find-variable-regeneratorruntime-reactnative



