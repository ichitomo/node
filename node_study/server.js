var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
    	//var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	}
		// request.setEncoding("utf-8");//受信データのエンコーディングをutf-8定義	
		// request.addListener("data", function(postDataChunk){
		// 	//POSTデータの塊を受信する度にpostDATA変数に追記していく	
		// 	postData += postDataChunk;
		// 	console.log("received POST data chunk '" + 
		// 		postDataChunk + "'.");
		// });
		
		// request.addListener("end", function(){
		// 	//POSTデータが数周できたときにだけ呼び出されるようにルータ呼び出し部分をENDイベントコールバック内に移動
		// 	route(handle, pathname, response, postData);	
		// });
		
  //   }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;       
//response.writeHead(200, {"Content-Type": "text/ plain"});
//var content = route(handle, pathname);
//response.write(content);
	//response.write("Hello World");
//response.end();