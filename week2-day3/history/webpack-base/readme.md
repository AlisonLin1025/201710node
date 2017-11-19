## vue-cli
- 下载一个全局生成vue项目的脚手架
```
npm install vue-cli -g
vue init webpack <项目名字>
cd 项目名字
npm install
npm run dev
```


## 模块
- node模块的规范commonjs
- cmd seajs amd require
- umd 为了做兼容处理的
- esmodule
    - 如何定义模块 (一个js就是一个模块)
    - 如何导出模块  (export)
    - 如何使用模块  (import)

## 先下载webpack
```
npm init -y
npm install webpack -save-dev
```

> 安装webpack或者less最好不要安装全局的，否则可能导致webpack的版本差异

- 在package.json中配置一个脚本，这个脚本用的命令是webpack.会去当前的node_modules下找bin对应的webpack名字让其执行，执行的就是bin/webpack.js,webpack.js需要当前目录下有个名字叫webpack.config.js的文件，我们通过npm run build执行的目录是当前文件的目录，所以会去当前目录下查找

## babel转义es6 -> es5
- 安装babel
```
npm install babel-core --save-dev
npm install babel-loader --save-dev
```

## babel-preset-es2015
- 让翻译官拥有解析es6语法的功能
```
npm install babel-preset-es2015 --save-dev
```

## babel-preset-stage-0
- 解析es7语法的
```
npm install babel-preset-stage-0 --save-dev
```

## 解析样式
- css-loader将css解析成模块，将解析的内容插入到style标签内(style-loader)
```
npm install css-loader style-loader --save-dev
```

## less,sass,stylus(预处理语言)
- less-loader less
- sass-loader
- stylus-loader 
```
npm install less less-loader --save-dev
```

## 解析图片
- file-loader url-loader(是依赖于file-loader的)
```
npm install file-loader url-loader --save-dev
```


## 需要解析html插件
- 插件的作用是以我们自己的html为模板将打包后的结果，自动引入到html中产出到dist目录下
```
npm install html-webpack-plugin --save-dev
```


## webpack-dev-server
- 这里面内置了服务，可以帮我们启动一个端口号，当代码更新时，可以自动打包（内存中打包），代码有变化就重新执行
```
npm install webpack-dev-server --save-dev
```


## 安装vue-loader vue-template-compiler
- vue-loader解析.vue文件的，vue会自动的调用vue-template-compiler
- vue-template-compiler用来解析vue模板的