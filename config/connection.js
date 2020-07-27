var mysql = require('mysql');
var connection

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'y233u7nb4clug2y4',
    password: 'r9orjv2b3zsslic5',
    port: 3306,
    database: 'sxxncweaxr5p18oo'
});
};

connection.connect(function(err){
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;