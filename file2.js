var fs = require('fs')

//Read contents of the File

fs.readFile('/home/ajaynadargi/Desktop/nodetest/input.txt', function(err, data) {
  if (err)
    throw err
  console.log(data.toString())
})

// Open file in Write Mode 'w'
/*
fs.open('/home/ajaynadargi/Desktop/nodetest/input.txt', 'w', function(err,data) {
  if (err)     throw err
  console.log('*** File Open Successfully ***')})
*/


// Data Append on file
/*
fs.appendFile('/home/ajaynadargi/Desktop/nodetest/input.txt', 'This Data Append', function(err) {
  if (err)     throw err
  console.log('*** Data Append Successfully ***')
})
*/

// Data Write on File
/*
fs.writeFile('/home/ajaynadargi/Desktop/nodetest/input.txt','This Data Written' , function(err) {
  if (err)     throw err
  console.log('*** Data Write Successfully ***')
})
*/

//Delete File
/*
fs.unlink('/home/ajaynadargi/Desktop/nodetest/input1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
*/

//Rename file
/*
fs.rename('/home/ajaynadargi/Desktop/nodetest/input1.txt', '/home/ajaynadargi/Desktop/nodetest/input2.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
*/
