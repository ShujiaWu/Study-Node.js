/**
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent','参数1','参数2');