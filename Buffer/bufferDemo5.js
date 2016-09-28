/**
 * 拷贝缓冲区
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */

var buf1 = new Buffer('buffer demo');
var buf2 = new Buffer(11);

buf1.copy(buf2,0,0,11);

console.log(buf2.toString());