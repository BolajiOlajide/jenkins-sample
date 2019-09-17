const { multiply } = require('../module');

describe('Test multiply method: ', () => {
  it('should work for integers', () => {
    expect(multiply(2, 8)).toEqual(16);
  });

  it('should work for floats', () => {
    expect(multiply(5.3, 7.5)).toEqual(39.75);
  });

  it('should work for negatives', () => {
    expect(multiply(2, -3)).toEqual(-6);
  });
})