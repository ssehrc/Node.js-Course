
    console.log(__filename);
    console.log(__dirname);
    var url = 'http://mylogger.io/log';

    function log(message){
        //send an http request
        console.log(message);
    }

    module.exports = log;

    module.exports.log = log;
    exports.log = log;

    //exports = log; cant do this as it is a reference 


