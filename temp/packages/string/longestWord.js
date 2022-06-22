// 找出最长单词
export const longestWord = text =>
    text.split(" ").reduce((acc, val) =>
        acc.length > val.length ? acc : val,
        "")