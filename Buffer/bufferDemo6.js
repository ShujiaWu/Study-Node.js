/**
 * 缓冲区裁剪
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */
var buf = new Buffer('buffer demo');
var buf2 = buf.slice(0,6);

console.log(buf2.toString());