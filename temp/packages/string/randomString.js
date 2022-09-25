/**
 * @name randomString
 * @desc 指定长度的随机字符串
 * @param {Number} length 
 * @param {Number} array 
 */


export const randomString = (length = 1, array = 0) => {
    if (array > 0) {
        return randomString_2(length, array);
    }
    return randomString_1(length);

    function randomString_1(length) {
        const _a = "abcdefghijklmnopqrstuvwxyz";
        const _A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const _0 = "0123456789";
        let str = `${_a + _A + _0}`;
        let result = "",
            l = str.length;
        for (let i = 0; i < length; i++) {
            result += str.charAt(Math.floor(Math.random() * l));
        }
        return result;
    }

    function randomString_2(length, array) {
        let result = [];
        while (array > 0) {
            result.push(randomString_1(length));
            array--;
        }
        return result;
    }
}

