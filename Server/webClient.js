/**
 * webClient
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */

var http = require('http');

//http://music.163.com/api/song/detail/?id=676508&ids=[676508]&csrf_token=
var options = {
    host: 'music.163.com',
    port: '80',
    path: '/api/song/detail/?id=676508&ids=[676508]&csrf_token='
};

http.request(options, function (response) {
    var body = '';
    response.on('data',function (data) {
        body +=data;
    });
    response.on('end',function () {
        console.log(body);

        var json = JSON.parse(body);
        var name = json.songs[0].name;
        var url = json.songs[0].mp3Url;
        console.log(name + '  ' + url);
    })
}).end();