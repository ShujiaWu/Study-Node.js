/**
 * 链式流
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('out.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('out.txt.gz'));

