/**
 * 获取样式表
 * @category DOM
 * @param {String} sheetName 
 * @returns 
 */
export const getCssStyleSheets = (sheetName: string = ''): any => Object.assign([], document.styleSheets).filter((sheet) => new RegExp(sheetName).test(sheet.href))