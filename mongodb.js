var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
//var url = "mongodb://localhost:27017/mydb";

// To Connect Database *******************************
MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
  if (err) throw err;
  var db = db.db("datasets");
  console.log("DB Connected");
//
// //  Create collection *******************************
//   db.createCollection("mycollection", function(err,res){
//     if(err) throw err;
//     console.log("mycollection created");
//   });
//
// //  Insert Into Collection *******************************
//   var mydoc = { name: "Ranjit", city: "Bhopal" };
//   db.collection("mycollection").insertOne(mydoc,function(err,res){
//     if(err) throw err;
//     console.log("1 Row Inserted");
//   });
//
// //  Insert Multiple Documents *******************************
//   var myobj = [
//       { name: 'John', city: 'Highway 71'},
//       { name: 'Peter', city: 'Lowstreet 4'},
//       { name: 'Amy', city: 'Apple st 652'},
//       { name: 'Hannah', city: 'Mountain 21'},
//       { name: 'Michael', city: 'Valley 345'},
//       { name: 'Sandy', city: 'Ocean blvd 2'},
//       { name: 'Betty', city: 'Green Grass 1'},
//       { name: 'Richard', city: 'Sky st 331'},
//       { name: 'Susan', city: 'One way 98'},
//       { name: 'Vicky', city: 'Yellow Garden 2'},
//       { name: 'Ben', city: 'Park Lane 38'},
//       { name: 'William', city: 'Central st 954'},
//       { name: 'Chuck', city: 'Main Road 989'},
//       { name: 'Viola', city: 'Sideway 1633'}
//     ];
//     db.collection("mycollection").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       //console.log(res);
//       console.log("Number of documents inserted: " + res.insertedCount);  });

//  //Find One Document *******************************
  // db.collection("mycollection").findOne({}, function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

 //Find All Documents*******************************
  db.collection("mycollection").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    //console.log(result[0]);  // Getting First Document
    //console.log(result[0].name); // Getting First Document and Name Field
  });

//  //Find Some (Projection) Documents*******************************
  // db.collection("mycollection").find({},{projection: {_id:0,name:1}}).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result); });

//  //Filter the Results *******************************
  // var condition = {     city: "Park Lane 38"   };
  // db.collection("mycollection").find(condition).toArray(function(err, result) {
  //   if (err) throw err;
  //   //console.log(result[0].name);
  //   console.log(result);  });

//  //Filter With Regular Expressions  *******************************
  // var condition = {city: /^S/};
  // db.collection("mycollection").find(condition).toArray(function(err, result) {
  //   if (err) throw err;
  //   //console.log(result[0].name);
  //   console.log(result);   });

// //Sort Documents  *******************************
  // var mysort = { name: 1 };
  // //var mysort = { city: 1 };
  // //  var mysort = { name: -1 };
  // db.collection("mycollection").find().sort(mysort).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);   });

// //  //Update One Document  *******************************
// var myquery = { city: "Valley 345" };
// var newvalues = { $set: {name: "Mickey", city: "Canyon 123" } };
//   db.collection("mycollection").updateOne(myquery, newvalues,function(err, res) {
//     if (err) throw err;
//     //console.log(res);
//     // console.log(res.result.n);
//     // console.log(res.modifiedCount);
//     // console.log(res.upsertedCount);
//     // console.log(res.upsertedId);
//     // console.log(res.matchedCount);
//     console.log("1 document updated");    });

// //  //Update One Document  *******************************
//   var myquery = { city: "Valley 345"   };
//   var newvalues = { $set: {name: "Mickey",city: "Canyon 123"   }
//   };
//   db.collection("mycollection").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     //console.log(res);
//     // console.log(res.result.n);
//     // console.log(res.modifiedCount);
//     // console.log(res.upsertedCount);
//     // console.log(res.upsertedId);
//     // console.log(res.matchedCount);
//     console.log("1 document updated");
//   });

//  //Update Specific Field Document  *******************************
// var myquery = { city: "Valley 345" };
// var newvalues = { $set: { city: "Canyon 123" } };
//   db.collection("mycollection").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     //console.log(res);
//     // console.log(res.result.n);
//     // console.log(res.modifiedCount);
//     // console.log(res.upsertedCount);
//     // console.log(res.upsertedId);
//     // console.log(res.matchedCount);
//     console.log(res.result.nModified + " document(s) updated");
//   });


//  //Update Many Document  *******************************
// var myquery = { city: /^S/ };
// var newvalues = {$set: {name: "Minnie"} };
//   db.collection("mycollection").updateMany(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     //console.log(res);
//     // console.log(res.result.n);
//     // console.log(res.modifiedCount);
//     // console.log(res.upsertedCount);
//     // console.log(res.upsertedId);
//     // console.log(res.matchedCount);
//     console.log(res.result.nModified + " document(s) updated");
//   });

//  //Limit the Result   *******************************
  // db.collection("mycollection").find().limit(5).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result); });

// //Delete One or Single Document  *******************************
  // var mycondition = { city: 'Mountain 21' };
  // db.collection("mycollection").deleteOne(mycondition,function(err, result) {
  //   if (err) throw err;
  //   //console.log(result);
  //   console.log("1 document deleted");     });

// //Delete Many Document  *******************************
  // var myquery = { city: /^O/ };
  // db.collection("mycollection").deleteMany(myquery,function(err, obj) {
  //   if (err) throw err;
  //   //console.log(obj);
  //   //console.log(obj.deletedCount);
  //   console.log(obj.result.n + " document(s) deleted");    });

//  //Drop Collection  *******************************
  // db.collection("mycollection").drop(function(err, delOK) {
  //   if (err) throw err;
  //   if (delOK) console.log(" Collection deleted");    });



}); // End of MongoClient.connect() function *******************************
