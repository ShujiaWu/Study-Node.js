/**
 * 模块：hello2
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */

var Hello = function () {
    var name;
    this.setName = function (name) {
        this.name = name;
    };
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    }
};

module.exports = Hello;