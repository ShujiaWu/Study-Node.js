/**
 * 模块调用
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */

var Hello = require('./hello2');
var hello = new Hello();

hello.setName('wsj');
hello.sayHello();