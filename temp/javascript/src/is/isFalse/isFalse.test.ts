import { isFalse } from './isFalse'

test('type of undefined', () => { expect(isFalse(undefined)).toBe(false); });
test('type of null', () => { expect(isFalse(null)).toBe(false); });
test('type of boolean', () => { expect(isFalse(true)).toBe(false); });
test('type of boolean', () => { expect(isFalse(false)).toBe(true); });
