'use strict';

const test = require('tape');

const spec = 'should be equivalent of the expected value.';
const expected = ['initial', 'inherit'];

test('require(\'css-wide-keywords\')', t => {
  t.plan(1);
  t.deepEqual(require('./'), expected, spec);
});

test('window.cssWideKeywords', t => {
  t.plan(1);

  global.window = {};
  require('./' + require('./bower.json').main);
  t.deepEqual(window.cssWideKeywords, expected, spec);
});
