const test = require('eater/runner').test;
const calc = require('../index');
const assert = require('power-assert');

test('calc sum', (done) => {
  assert(calc.sum(1, 2) === 3);
  done();
});

test('calc div', (done) => {
  setTimeout(() => {
    assert(calc.div(1, 2) === 0.5);
    done();
  }, 1000);
});

test('calc mul', (done) => {
  assert(calc.mul(2, 2) === 4);
  done();
});
