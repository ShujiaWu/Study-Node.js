/**
 * Created by Yun on 2016/11/15.
 */
var images = require('images');
var fs = require('fs');
var gm = require('gm');
var imageMagick = gm.subClass({ imageMagick : true });


var fileList = [];
var sourceDir = 'D:/Desktop/素材/';
var targetDir = sourceDir + 'output';

// fs.watch(sourceDir,function (event,filename) {
//     console.log(event);
//     console.log(new Date().getTime() + ':' + event + '------' + filename);
// });
fs.watchFile(sourceDir,function (curr, prev) {
    console.log(curr);
    console.log(prev);
});

fs.readdir(sourceDir,function (err, files) {
    fileList = files;
    if (!fs.existsSync(targetDir)){
        fs.mkdirSync(targetDir);
    }
    convertImages2();
});

function convertImages() {
    fileList.forEach(function (file) {
        var fileInfo = fs.lstatSync(sourceDir + file);
        if (!fileInfo.isDirectory()){
            console.log(file);
            var _t = file.split('.');
            try {
                var image = images(sourceDir + file);
                image.save(targetDir + '//' + _t[0] + '_out.' + _t[1]);
            }catch (e){
                console.log(e);
            }
        }
    });

}

function convertImages2() {
    fileList.forEach(function (file) {
        var fileInfo = fs.lstatSync(sourceDir + file);
        if (!fileInfo.isDirectory()){
            console.log(file);
            var _t = file.split('.');
            gm(sourceDir + file).size(function(err,size){
                gm(sourceDir + file)
                .resize(size.width / 2) //加('!')强行把图片缩放成对应尺寸150*150！
                    // .autoOrient()
                    .write(targetDir + '/' + _t[0] + '@1x.' + _t[1], function(err){
                        if(err){
                            console.log(err);
                        }

                    });
            });
            // gm(sourceDir + file)
            //     .scale(0.5) //加('!')强行把图片缩放成对应尺寸150*150！
            //     .autoOrient()
            //     .write(targetDir + '/' + _t[0] + '_out.' + _t[1], function(err){
            //         console.log(err);
            //     });

        }

    });
    // imageMagick('test.jpg')
    //     .resize(150, 150) //加('!')强行把图片缩放成对应尺寸150*150！
    //     .autoOrient()
    //     .write('out.jpg', function(err){
    //         console.log(err);
    //     });

    // gm('./test.jpg')
    //     .resize(240, 240)
    //     .noProfile()
    //     .write('out.jpg', function (err) {
    //         if (!err){
    //             console.log('done');
    //         }else {
    //             console.log(err);
    //         }
    //     });

}
