var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!./css/style.css');

$(document).foundation();

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
