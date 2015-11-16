var exec = require("child_process").exec;

function start(response){
    console.log("Request handler 'start' was called.");
    //表示するものは以下のコマンド
        exec("ls -lah",
	     {timeout:10000, maxBuffer:2000*1024},//時間がかかっているとき
	 function(error, stdout, stderr){
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(stdout);
	    response.end();
	});
}

function upload(response){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;

//10秒間をつくる
//  function sleep(milliSeconds){
//var startTime = new Date().getTime();
//while (new Date().getTime() < startTime + milliSeconds);
//  }
//  sleep(10000);

//
    //function (error, stdout, stderr){
	     //exec("find /",