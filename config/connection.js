// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWS_DB.url);
} else {
  var connection = mysql.createConnection ({
    host: "localhost",
  port: 3306,
  user: "root",
  password: "iamsocool",
  database: "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
