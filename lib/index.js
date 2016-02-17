import express from 'express';
import proxy from 'express-http-proxy';
import cors from 'cors';
import url from 'url';

let app = express();
let port = process.env.COC_PORT || 8080;
let token = process.env.COC_TOKEN;

if (!token) {
  console.log('Please specify a COC_TOKEN env variable');
  process.exit(1);
}

app.use(cors());
app.use(proxy('https://api.clashofclans.com', {
  filter: function(req, res) {
    return req.method == 'GET';
  },
  forwardPath: function(req, res) {
    return url.parse(req.url).path;
  },
  decorateRequest: function(req) {
    req.headers['Authorization'] = `Bearer ${token}`;
    return req;
  }
}));

app.listen(port, function (err) {
  if (err) {
    throw err;
  }

  console.log(`COC proxy listening on port ${port}`);
});