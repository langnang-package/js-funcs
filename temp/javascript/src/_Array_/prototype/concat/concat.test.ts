import { _Array_ } from "../../_Array_";

test('Array.prototype.concat', () => {
  const array = new _Array_(1, 2, 3)
  expect(array.concat(4, 5, 6, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
});
