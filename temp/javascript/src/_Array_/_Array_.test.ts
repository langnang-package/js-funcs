import { _Array_ } from "./_Array_";

test('Array', () => {
  const array = new _Array_(1, 2, 3)
  expect(array.value).toEqual([1, 2, 3])
  expect(array.length).toBe(3)
});