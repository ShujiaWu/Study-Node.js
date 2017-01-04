/**
 * Created by Yun on 2016/12/29.
 */
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    //https://github.com/andris9/nodemailer-wellknown#supported-services 支持列表
    service: 'QQex',
    port: 465, // SMTP 端口
    secureConnection: true, // 使用 SSL
    auth: {
        user: '',
        //这里密码不是qq密码，是你设置的smtp密码
        pass: ''
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '', // 发件地址
    to: '', // 收件列表
    subject: '', // 标题
    //text和html两者只支持一种
    html: '<b>Hello world ?</b>' // html 内容
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});