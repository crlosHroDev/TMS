"use strict";

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _app = _interopRequireDefault(require("../dist/ssr/app"));

var _reactRouter = require("react-router");

var _server = _interopRequireDefault(require("react-dom/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.static('dist'));
app.get('*', function (req, res) {
  var html = _server.default.renderToString(_react.default.createElement(_reactRouter.StaticRouter, {
    location: req.url,
    context: {
      name: 'Carlos Hernandez'
    }
  }, _react.default.createElement(_app.default, null)));

  res.write("<!DOCTYPE html>\n  <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n        <title>TLogis</title>\n        <link rel='stylesheet' href='/css/app.css'>\n      </head>\n      <body>\n        <div id=\"home-container\">".concat(html, "</div>\n        <div id=\"modal-container\"></div>\n        <script src=\"/js/app.js\"></script>\n      </body>\n    </html>\n    "));
  res.end();
});
app.listen(3000);
console.log('el server prendió en el puerto 3000');
