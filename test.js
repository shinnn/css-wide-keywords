/*!
 * css-wide-keywords | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/css-wide-keywords
*/
'use strict';

var test = require('tape');

var bower = require('./bower.json');
var spec = 'should be equivalent of the expected value.';
var expected = ['initial', 'inherit'];

test('require(\'css-wide-keywords\')', function(t) {
  t.plan(1);
  t.deepEqual(require('./'), expected, spec);
});

test('window.cssWideKeywords', function(t) {
  t.plan(1);

  global.window = {};
  require(bower.main);
  t.deepEqual(window.cssWideKeywords, expected, spec);
});
