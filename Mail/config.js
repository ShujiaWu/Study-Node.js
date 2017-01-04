/**
 * Created by Yun on 2016/12/27.
 */
module.exports = {
    //邮件配置
    email: {
        service: 'QQex',    //邮箱类型
        user: '',    //邮箱地址
        pass: '',   //邮箱密码
        from: '',   //发送的邮箱
        to: '',  //目标邮箱，支持多个
        subject: ''    //邮件标题
    },
    task: {
        updateType: 1,  //监视的类型，0，定时监视 1：文件更改后定时发送
        interval: 3 * 60 * 1000,  //时间
        target: 'D:/Desktop/素材' //这里填写的是要监视的路径
    },
    filter: {
        ext: [],
        folder: [],
        file: ['.DS_Store', 'Thumbs.db']
    }
};