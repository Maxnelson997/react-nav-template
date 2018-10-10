const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
// var secure = require('ssl-express-www');
// const cors = require('cors');

// app.use(secure)

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Key, Access-Control-Allow-Origin");
//   next();
// });

// app.use(cors())

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})
app.listen(port);

console.log("server started");