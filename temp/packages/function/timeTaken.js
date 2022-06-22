/**
 * @name timeTaken
 * @desc 测量执行函数所用的时间
 * @param {*} fn 
 * @param  {...any} args 
 */
export const timeTaken = (fn, ...args) => {
	console.time('timeTaken');
	const result = fn(...args);
	console.timeEnd('timeTaken');
	return result;
};