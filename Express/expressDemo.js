/**
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */
var express = require('express');
var bodyParser = require('body-parser');
var cookiePaser = require('cookie-parser');
var fs = require('fs');
var multer = require('multer');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('file'));
app.use(cookiePaser());

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/index.html', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {
    console.log("Cookie:" + req.cookies);
    var respon = {
        name: req.body.userName
    };
    console.log(respon);

    res.end(JSON.stringify(respon));
});

app.post('/file_upload', function (req, res) {
    var response;
    console.log(req.files[0]);

    var des_file = __dirname + '/' + req.files[0].originalname;

    // fs.createReadStream(req.files[0].path).pipe(fs.createWriteStream(des_file));

    fs.readFile(req.files[0].path, function (err, data) {
        if (err) {
            console.log(err);
        }
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err)
            }
            response = {
                message: 'File upload success!',
                fileName: req.files[0].originalname
            };
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务器地址：http://%s:%s', host, port);
});