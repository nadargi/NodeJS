var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "XB"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected to XB database");

  // conn.query("insert into emp values(6,'Ranjit',12121,'Bhopal')",function(err,result) {
  //   if(err) throw err;
  //   console.log(result);
  //   console.log('Data inserted');
  // });

  conn.query('select * from emp', function(err, result) {
    if (err) throw err;
    console.log(result); // Display All Rows
    //console.log(result[0]);  Display First Row
    //console.log(result[0].ename);  Display First Row and Display Column Ename Only
  });

  //Update records from database
  // var sql = "UPDATE emp SET ename = 'Aj' WHERE city = 'Pune'";
  // con.query(sql, function(err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows + " record(s) updated");
  // });

  //Delete records from database
  // var sql = "DELETE FROM emp WHERE eid = 2";
  // conn.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records deleted: " + result.affectedRows);
  // });


  // The third parameter of the callback function is an array
  //containing information about each field in the result.
  // conn.query('select * from emp', function(err, result,fields) {
  //   if (err) throw err;
  //   console.log(fields);   });

  // Drop Table
  // var sql = "DROP TABLE emp";
  //  var sqlexits = "DROP TABLE IF EXISTS emp";

  //   conn.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table deleted");
  //   });
  //



});
