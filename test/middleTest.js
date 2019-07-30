// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
  });
});

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
// assertArraysEqual(middle([1, 2]),[1, 2]);