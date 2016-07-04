const test = require('eater/runner').test;
const calc = require('../index');
const assert = require('power-assert');

test('calc sum', () => {
  assert(calc.sum(1, 2) === 3);
});

test('calc div', () => {
  setTimeout(() => {
    assert(calc.div(1, 2) === 0.5);
  }, 1000);
});

test('calc mul', () => {
  assert(calc.mul(2, 2) === 4);
});
