//util 工具模块 核心模块/内置模块，不需要安装直接使用
// util.inherits
// util.isArray,isFunction
// util.promisify 把方法转化成promise
let util = require('util');
// 判断数据类型
// 1.typeof 判断不了对象数据类型
// 2.instanceof 不能判断继承后的
// 3.constructor
// 4.Object.prototype.toString.call([]) === '[object Array]'
//console.log(util.isDate(/a/));

function Parent() {
    this.smoking = '抽烟';
}
Parent.prototype.sleep = '睡觉';
function Child() {
}
util.inherits(Child,Parent); // 继承公有
let child = new Child();
console.log(child.sleep);


// 继承方式
/*function Parent() {
    this.smoking = '抽烟';
}

Parent.prototype.sleep = '睡觉';
function Child() {}*/

// 只继承公有
//Object.setPrototypeOf(Child.prototype, Parent.prototype);
//Child.prototype.__proto__ = Parent.prototype; // 间接继承，链接到父亲上
//Child.prototype = Object.create(Parent.prototype); //公有属性

// 继承私有+继承公有
// Child.prototype = new Parent(); // 传参无意义
// call+Object.create(); extends + super

// 只继承私有
/*function Parent() {
 this.smoking = '抽烟';
 }
 Parent.prototype.sleep = '睡觉';
 function Child() {
 Parent.call(this)
 }
 let child = new Child();
 console.log(child.smoking);*/



/*function create(proto) {
 let Fn = function () {}; //创建一个空类,把传进来的原型 赋予给此类
 Fn.prototype = proto;
 return new Fn(); // 返回只拥有传进来的公有属性的实例
 }*/