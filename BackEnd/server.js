var express = require('express');
var app = express();
app.use(express.json());

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "bvm25.cci.drexel.edu",
  user: "wk77",
  password: "dee4JaeL-oSau5Kai-eeG0AuF6",
  database: "wk77_INFO300_202103"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

app.get('/api/messages', (req, res) => {
    con.query("SELECT * FROM messages", function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/api/messages', (req, res) => {
    var sql = "INSERT INTO messages (content) VALUES (?)";
    con.query(sql, [req.body.content], function (err, result) {
        if (err) throw err;
        console.log("Message inserted");
        res.json({ message: 'Message inserted' });
    });
});

app.get('/api/journals', (req, res) => {
    con.query("SELECT * FROM journals", function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/api/journals', (req, res) => {
    var sql = "INSERT INTO journals (content) VALUES (?)";
    con.query(sql, [req.body.content], function (err, result) {
        if (err) throw err;
        console.log("Journal entry inserted");
        res.json({ message: 'Journal entry inserted' });
    });
});

const port = 9378;
app.listen(port, () => console.log(`Server is running on port ${port}`));
