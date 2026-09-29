(function (exports, require, module, __filename, __dirname){
    var url = 'http://mylogger.io/log';

    function log(message){
        //send an http request
        console.log(message);
    }

    module.exports = log;
})

