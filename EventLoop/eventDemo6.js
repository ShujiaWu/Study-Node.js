/**
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */
var events = require('events');
var emitter = new events.EventEmitter();

emitter.addListener('newListener',function () {
   console.log('添加监听器');
});

emitter.addListener('removeListener',function () {
    console.log('移除监听器');
});

emitter.addListener('someEvent',function () {
    console.log('someEvent 被触发了 -- 1');
});

emitter.on('someEvent',function () {
    console.log('someEvent 被触发了 -- 2');
});

emitter.once('someEvent',function () {
    console.log('someEvent 被触发了 -- 3');
});


console.log('第一次：');
emitter.emit('someEvent');
console.log('第二次：');
emitter.emit('someEvent');

emitter.removeAllListeners('someEvent');
console.log('第三次：');
emitter.emit('someEvent');

console.log(emitter.listeners('someEvent').length);


emitter.emit('error');

