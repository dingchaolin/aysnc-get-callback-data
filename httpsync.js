var request = require('urllib-sync').request;
var req = request("http://www.baidu.com");

console.log( req.data.toString() )

