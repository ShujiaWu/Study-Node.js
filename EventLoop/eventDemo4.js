/**
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */
var EventEmitter = require("events").EventEmitter;

var event = new EventEmitter();

event.on('some_event',function () {
    console.log('some_event 事件触发');
});

setTimeout(function () {
    event.emit('some_event');
},1000);