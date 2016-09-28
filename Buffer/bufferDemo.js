/**
 * 创建缓冲区、写入、读取
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */

var buf0 = new Buffer(10);

var buf1 = new Buffer([10,20,30,40,50]);

var buf2 = new Buffer('buffer demo','utf-8');

var buf3 = new Buffer(256);

var len = buf3.write('buffer demo');

console.log('写入字节:' + len);

console.log(buf3.toString(undefined,0,len));

