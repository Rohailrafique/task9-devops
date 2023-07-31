const { add } = require('./index');

test('should add two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

