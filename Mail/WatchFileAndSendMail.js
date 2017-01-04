/**
 * Created by Yun on 2016/12/29.
 */
var fs = require('fs');
var _ = require('lodash');
var nodemailer = require('nodemailer');
var config = require('./config');
var transporter = nodemailer.createTransport({
    //https://github.com/andris9/nodemailer-wellknown#supported-services 支持列表
    service: config.email.service,
    port: 465, // SMTP 端口
    secureConnection: true, // 使用 SSL
    auth: {
        user: config.email.user,
        //这里密码不是qq密码，是你设置的smtp密码
        pass: config.email.pass
    }
});


var chokidar = require('chokidar');
var watcher = chokidar.watch(config.task.target, {
    ignored: /[\/\\]\./, persistent: true
});

function getDateTime() {
    var date = new Date();
    return date.getFullYear() + '-' + zeroize(date.getMonth() + 1) + '-' + zeroize(date.getDate()) + ' '
        + zeroize(date.getHours()) + ':' + zeroize(date.getMinutes()) + ':' + zeroize(date.getSeconds());
}

function zeroize(value, length) {
    if (!length) length = 2;
    value = String(value);
    for (var i = 0, zeros = ''; i < (length - value.length); i++) {
        zeros += '0';
    }
    return zeros + value;
}

var isReadyForWatch = false;
var changeList = [];
var value;
if (config.task.updateType == 1) {
    var task = _.debounce(runTask, config.task.interval);
}
watcher
    .on('ready', function () {
        console.log(getDateTime(), '\t', '初始化完成，开始监听文件变化');
        isReadyForWatch = true;
    })
    .on('addDir', function (path) {
        if (isReadyForWatch) {
            value = getDateTime() + '\t【添加-目录】' + path;
            console.log(value);
            changeList.push({
                type: 1,
                value: value
            })
        }

    })
    .on('unlinkDir', function (path) {
        if (isReadyForWatch) {
            value = getDateTime() + '\t【删除-目录】' + path;
            console.log(value);
            changeList.push({
                type: 2,
                value: value
            })
        }
    })
    .on('add', function (path) {
        if (isReadyForWatch) {
            value = getDateTime() + '\t【添加-文件】' + path;
            console.log(value);
            changeList.push({
                type: 3,
                value: value
            })
        }
    })
    .on('change', function (path) {
        if (isReadyForWatch) {
            value = getDateTime() + '\t【更改-文件】' + path;
            console.log(value);
            changeList.push({
                type: 4,
                value: value
            })
        }
    })
    .on('unlink', function (path) {
        if (isReadyForWatch) {
            value = getDateTime() + '\t【删除-文件】' + path;
            console.log(value);
            changeList.push({
                type: 5,
                value: value
            })
        }
    })
    .on('error', function (error) {
        console.error(getDateTime(), '\t', '发生异常', error);
    })
    .on('raw', function (event, path, details) {
        if (config.task.updateType == 1) {
            task();
        }

    });

//即将发送
var sendList = [];
//邮件的内容
var mailHtml = [];
//邮件段落头部
var styleHtml = [
    '<p>',
    '<p style="color:green" >',
    '<p style="color:red" >',
    '<p style="color:green" >',
    '<p style="color:orange" >',
    '<p style="color:red" >'
];

//定时任务
if (config.task.updateType == 0) {
    setInterval(function () {
        runTask();
    }, config.task.interval);
}

/**
 * 运行任务
 */
function runTask() {
    console.log('===================', getDateTime(), '===================');
    //存在队列
    if (changeList.length == 0) {
        console.log(getDateTime(), '\t不存在变更列表，暂停发送！');
        return;
    }
    if (sendList.length > 0) {
        console.log(getDateTime(), '\t存在未发送任务，暂停发送！');
        return;
    }
    console.log(getDateTime(), '\t添加发送任务');
    var length = changeList.length;
    for (var i = 0; i < length; i++) {
        sendList.push(changeList.shift());
    }
    console.log(getDateTime(), '\t未发送队列：', changeList.length);
    console.log(getDateTime(), '\t准备发送队列：', sendList.length);
    for (var i = 0; i < sendList.length; i++) {
        var data = sendList[i];
        mailHtml = mailHtml + styleHtml[data.type] + data.value + '</p>\n';
    }
    sendMail();
}


/**
 * 发送邮件
 */
function sendMail() {
    var mailOptions = {
        from: config.email.from, // 发件地址
        to: config.email.to, // 收件列表
        subject: config.email.subject, // 标题
        //text和html两者只支持一种
        html: mailHtml // html 内容
    };
    console.log(getDateTime(), '\t开始进行邮件发送任务');
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log(getDateTime(), '\t邮件发送成功\t', info.response);
        sendList = [];
        mailHtml = '';
        console.log('===================', getDateTime(), '===================');
    });
}