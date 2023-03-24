const express = require('express');
const bodyParser = require('body-parser');
var app = express();
const multer = require('multer')
const upload = multer() // for parsing multipart/form-data
app.use(bodyParser.json({limit: '1mb'})) // for parsing application/json
app.use(bodyParser.urlencoded({limit: '1mb', extended: true})) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.raw());
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
app.all('/*', upload.any(), async (req, res) => {
  console.log("Headers :: ", req.headers);
  console.log("Body :: ", req.body);
  console.log("Method :: ", req.method);
  console.log("URL :: ", req.url);
  console.log("Query :: ", req.query);
  console.log("Params :: ", req.params);
  res.sendStatus(204);
});
