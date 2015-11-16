var server = require("./server");//server.jsを呼ぶ
var router = require("./router");//router.jsを呼ぶ
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);