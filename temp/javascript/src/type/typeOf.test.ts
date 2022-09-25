import { type } from "./type";

test('type of undefined', () => { expect(type(undefined)).toBe('undefined'); });
test('type of null', () => { expect(type(null)).toBe('null'); });
test('type of array', () => { expect(type([])).toBe('array'); });
test('type of boolean', () => { expect(type(true)).toBe('boolean'); });
test('type of date', () => { expect(type(new Date())).toBe('date'); });
test('type of function', () => { expect(type(() => { })).toBe('function'); });
test('type of map', () => { expect(type(new Map())).toBe('map'); });
test('type of number', () => { expect(type(0)).toBe('number'); });
test('type of object', () => { expect(type({})).toBe('object'); });
test('type of regexp', () => { expect(type(new RegExp(''))).toBe('regexp'); });
test('type of set', () => { expect(type(new Set())).toBe('set'); });
test('type of string', () => { expect(type('')).toBe('string'); });
test('type of symbol', () => { expect(type(Symbol())).toBe('symbol'); });
