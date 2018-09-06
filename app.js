var express = require('express')
var app = express()

app.get('/',function(req,res){
  res.send("hello i am at get method")
})

app.listen(8000,function(){
  console.log('Server is started at port 8000')
})
