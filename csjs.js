'use strict';

var csjs = require('csjs');
var insertCss = require('insert-css');

function csjsInserter() {
  var args = Array.prototype.slice.call(arguments);
  var result = csjs.apply(null, args);
  insertCss(csjs.getCss(result));
  return result;
}

module.exports = csjsInserter;
module.exports.csjs = csjsInserter;
module.exports.getCss = csjs.getCss;
