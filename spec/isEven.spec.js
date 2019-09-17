const { isEven } = require('../module');

describe('Test isEven method', () => {
  it('should return true for numbers divisible by 2', () => {
    expect(isEven(2)).toBeTruthy();
    expect(isEven(20)).toBeTruthy();
    expect(isEven(48)).toBeTruthy();
  });

  it('should return false for odd numbers', () => {
    expect(isEven(49)).toBeFalsy();
    expect(isEven(101)).toBeFalsy();
  });
});
