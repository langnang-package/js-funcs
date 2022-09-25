/**
 * 求总和
 * @param  {...any} nums 
 */
const sumTwo = (a, b) => {
    return a + b;
}

export const sum = (...nums) => nums.reduce((acc, val) => acc + val, 0)


