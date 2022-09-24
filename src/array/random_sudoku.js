import { random } from "../math/random";
/**
 * 生成随机九宫格数独
 */
export const random_sudoku = () => {
  let result = [];
  for (let i = 0; i < 9; i++) {
    let row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (i >= 6) {
      row = row.slice(5).concat(row.slice(0)).slice(0, 9);
    } else if (i >= 3) {
      row = row.slice(7).concat(row.slice(0)).slice(0, 9);
    }
    result[i] = row.slice((i % 3) * 3).concat(row.slice(0, (i % 3) * 3));
  }
  let i = 0;
  while (i < random() * 10000) {
    let rc1 = parseInt(random(9));
    let rc2 = rc1;
    switch (rc1 % 3) {
      case 0:
        rc2 = Math.random() > 0.5 ? rc1 + 1 : rc1 + 2;
        break;
      case 1:
        rc2 = Math.random() > 0.5 ? rc1 - 1 : rc1 + 1;
        break;
      case 2:
        rc2 = Math.random() > 0.5 ? rc1 - 1 : rc1 - 2;
        break;
      default:
        break;
    }
    if (random() > 0.5) {
      [result[r1], result[r2]] = [result[r2], result[r1]];
    } else {
      for (let i = 0; i < 9; i++) {
        [result[i][c1], result[i][c2]] = [result[i][c2], result[i][c1]];
      }
    }
    i++;
  }
  return result;
};
