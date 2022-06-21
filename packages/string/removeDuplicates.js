/**
 * 移除字符串中所有相邻重复项
 * @param {*} string 
 */
export const removeDuplicates = (string) => {
    let stack = []
    for (let c of string) {
        let prev = stack.pop()
        if (prev !== c) {
            stack.push(prev)
            stack.push(c)
        }
    }
    return stack.join('')
}