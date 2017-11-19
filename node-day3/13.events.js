// 发布订阅
let EventEmitter = require('events');
let {inherits} = require('util');
function Girl() {}
let girl = new Girl();
inherits(Girl,EventEmitter); // {'失恋':[cry,eat]}
let fn = function (param) { // 订阅
    console.log('哭',param)
};
girl.once('失恋',fn);
girl.on('失恋',function (param) { // 订阅
    console.log('吃',param)
});
girl.removeListener('失恋',fn);
girl.emit('失恋','我'); // 发布
girl.emit('失恋','我'); // 发布
// remove once on emit
