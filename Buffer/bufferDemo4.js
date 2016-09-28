/**
 * 缓冲区比较
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */
var buf1 = new Buffer('ABC');
var buf2 = new Buffer('ABCD');

var result = Buffer.compare(buf1,buf2);

console.log(result);

if(result < 0){
    console.log('buf1在buf之前');
}else if(result == 0){
    console.log('buf1与buf相同');
}else{
    console.log('buf1在buf之后');
}