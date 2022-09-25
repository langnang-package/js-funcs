/**
 * 混合属性到目标对象
 */
export const extend = (to: any, _from: any) => {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

