/**
 * 缓冲区转Json
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */

var buf = new Buffer('buffer demo');
var json = buf.toJSON();
console.log(json);