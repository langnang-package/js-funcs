/**
 * 检测是否是有效的括号
 * {},[],()
 * @param {*} string 
 */
export const isValidParenthess = (string) => {
    // 确定括号对应关系
    let map = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    let stack = [];
    for (let i = 0; i <= string.length - 1; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else if (s[i] !== map[stack.pop()]) {
            return false;
        }
    }
    return stack.length === 0;
}