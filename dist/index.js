'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = require('express-http-proxy');

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.COC_PORT || 8080;
var token = process.env.COC_TOKEN;

if (!token) {
  console.log('Please specify a COC_TOKEN env variable');
  process.exit(1);
}

app.use((0, _cors2.default)());
app.use((0, _expressHttpProxy2.default)('https://api.clashofclans.com', {
  filter: function filter(req, res) {
    return req.method == 'GET';
  },
  forwardPath: function forwardPath(req, res) {
    return _url2.default.parse(req.url).path;
  },
  decorateRequest: function decorateRequest(req) {
    req.headers['Authorization'] = 'Bearer ' + token;
    return req;
  }
}));

app.listen(port, function (err) {
  if (err) {
    throw err;
  }

  console.log('COC proxy listening on port ' + port);
});