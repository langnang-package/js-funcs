/**
 * 校验数独结果
 * @param {Array} sudoku
 * @returns {Boolean} 
 */
export const verify_sudoku = (sudoku: any[]) => {
  return verify_sudoku_row(sudoku) && verify_sudoku_col(sudoku) && verify_sudoku_block(sudoku)
};
// 校验行
const verify_sudoku_row = (sudoku: any[]) => {
  return sudoku.every(row => [...new Set([...row])].length == 9);
}
// 校验列
const verify_sudoku_col = (sudoku: any[]) => {
  const _result = sudoku.map((v_row: any, index_row: number) => v_row.map((v_col: any, index_col: number) => sudoku[index_col][index_row]));
  return verify_sudoku_row(_result);
}
// 校验块
const verify_sudoku_block = (sudoku: any[]) => {
  let _result: any[] = [];
  let col_center_index_array = [1, 4, 7];
  let row_center_index_array = [1, 4, 7];
  col_center_index_array.forEach(col_center_index => {
    row_center_index_array.forEach(row_center_index => {
      let _block = [];
      for (let y = col_center_index - 1; y <= col_center_index + 1; y++) {
        for (let x = row_center_index - 1; x <= row_center_index + 1; x++) {
          _block.push(sudoku[y][x]);
        }
      }
      _result.push(_block);
    });
  });
  return verify_sudoku_row(_result);
}
