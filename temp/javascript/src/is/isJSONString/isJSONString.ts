import { type } from "../../type/type";
/**
 * 检测JSON字符串
 * @param {String} str
 */
export const isJSONString = (jsonString: string) => {
  try {
    if (type(JSON.parse(jsonString)) == "object") {
      return true;
    }
  } catch (e) {
  }
  return false;
}

