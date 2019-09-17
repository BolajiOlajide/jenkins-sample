const { add } = require('../module');

describe('Test add method', () => {
  it('should work for integers', () => {
    expect(add(2, 2)).toEqual(4);
  });

  it('should work for floats', () => {
    expect(add(2.2, 3.5)).toEqual(5.7);
  });

  it('should work for negatives', () => {
    expect(add(2, -3)).toEqual(-1);
  });
})