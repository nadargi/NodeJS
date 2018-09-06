var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
fs.readFile('/home/ajaynadargi/Desktop/nodetest/nput.txt',function(err,data){
if(err)
 {
  console.log("Errrrrror");
  throw err;  
 }
res.writeHead(200,{'Content-Type':'text/plain'});
res.write(data);
console.log(data.toString());
res.end();
});

});

server.listen(8000);
