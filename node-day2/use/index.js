let str = require('vue-plus');
console.log(str);
// 第三方模块不需要./的形式引入 可以直接通过包名将文件引入,找package.json中的main对应的文件运行,如果当前目录下没找会像上一级查找，找到计算机的根目录为止
console.log(module.paths);