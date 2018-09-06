var fs = require('fs');
var rs = fs.createReadStream('./input1.txt');
rs.on('open', function () {
  console.log('The file is Open');
})
