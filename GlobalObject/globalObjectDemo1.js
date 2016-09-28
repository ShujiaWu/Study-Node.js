/**
 * 全局对象
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */

console.log(__dirname);

console.log(__filename);

console.time('Test Start');
var count = 0;
for(var i = 0; i < 1000; i++){
    count ++
}
console.timeEnd('Test Start');


console.log(process.pid);
console.log(process.arch);
console.log(process.platform);

console.log(process.cwd());

process.stdout.write('Hello stdout\n');

process.on('exit',function (code) {
   console.log('程序执行结束：' + code);
});

