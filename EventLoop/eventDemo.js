/**
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */

var events = require("events");
var eventEmitter = new events.EventEmitter();
eventEmitter.on('eventName',function () {
    console.log('事件被触发');
});
eventEmitter.emit('eventName');