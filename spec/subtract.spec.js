const { subtract } = require('../module');

describe('Test subtract method', () => {
  it('should work for integers', () => {
    expect(subtract(2, 2)).toEqual(0);
    expect(subtract(9, 5)).toEqual(4);
  });

  it('should work for floats', () => {
    expect(subtract(5.8, 1.3)).toEqual(4.5);
  });

  it('should work for negatives', () => {
    expect(subtract(2, -3)).toEqual(5);
  });
});
