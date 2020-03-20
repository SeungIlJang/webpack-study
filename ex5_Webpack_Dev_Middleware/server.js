var express = require('express');
var app = express();
var path = require('path');

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    //inmemory에서 가져오는 부분
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
  }));

app.use(express.static(__dirname));

// view engine setup
// __dirname : root folder
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.send('index');
});

app.listen(3000);
console.log("Server running on port 3000");