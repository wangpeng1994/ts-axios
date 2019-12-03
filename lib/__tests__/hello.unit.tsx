function add(a: number, b: number) {
  return a + b;
}

test('1 加 2 应该等于 3', () => {
  expect(add(1, 2)).toEqual(3);
});
