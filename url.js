var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true);
  res.write(q.href);
    //res.write(req.url);

  var query=url.parse(req.url,true).query;
  var txt = query.year+" "+query.month;
  res.write(txt);

  res.end();
}).listen(8080);
