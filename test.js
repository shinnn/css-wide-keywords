'use strong';

const test = require('tape');

const spec = 'should be equivalent of the expected value.';
const expected = ['initial', 'inherit', 'unset'];

test('require(\'css-wide-keywords\')', t => {
  t.plan(1);
  t.deepEqual(require('./'), expected, spec);
});

test('window.cssWideKeywords', t => {
  t.plan(1);

  global.window = {};
  require('./' + require('./bower.json').main);
  t.deepEqual(global.window.cssWideKeywords, expected, spec);
});
