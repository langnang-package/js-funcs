import { flatten } from "./flatten";

test("flatten", () => {
  expect(flatten([1, [1, 1, 1]], -1)).toEqual([1, 1, 1, 1])
})