/**
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */

var buf1 = new Buffer('1');
var buf2 = new Buffer('2');

var buf3 = Buffer.concat([buf1,buf2]);

console.log(buf3.toString());