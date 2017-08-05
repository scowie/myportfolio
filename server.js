
/*eslint-disable no-var */
var express             = require('express');
var path                = require('path');
var open                = require('open');
var compression         = require('compression');

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.PORT || 8080);
var app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port);