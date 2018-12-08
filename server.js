const express = require('express');
const app = express();
// var secure = require('ssl-express-www');
const cors = require('cors');

// app.use(secure)

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Key, Access-Control-Allow-Origin");
//   next();
// });


app.get('/api', (req, res) => {
  res.send({hello:'m8'})
})


app.use(cors())

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist/'));
  app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
  })
}

const PORT = process.env.PORT || 8090;

app.listen(PORT);

console.log('server running on port',PORT);