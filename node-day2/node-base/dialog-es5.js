// 写好的方法
function Dialog() {
    this.time = 3000;
}
Dialog.title = '弹框'; //只能类调用
Dialog.prototype.$show = function () {
    console.log('show')
};
Dialog.prototype.$hide = function () {
    console.log('hide')
};
// exports.xxx = Dialog; //给exports赋予属性可以导致 module.exports对象的变化
module.exports = Dialog;
// 直接改变module.exports的指向
// 最终导出的是module.exports

/*
(function(exports,module,require)){
    module.exports = exports = this =  {}
     function Dialog() {
     this.time = 3000;
     }
     Dialog.title = '弹框'; //只能类调用
     Dialog.prototype.$show = function () {
     console.log('show')
     };
     Dialog.prototype.$hide = function () {
     console.log('hide')
     };
    exports = Dialog  X
    return module.exports
}()
* */