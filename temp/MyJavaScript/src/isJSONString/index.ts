import {typeOf} from "../Function/typeOf";

/**
 * @desc 检测JSON字符串
 * @param str {String}
 */
export const isJSONString = (str: string) => {
    try {
        if (typeOf(JSON.parse(str)) == "object") {
            return true;
        }
    } catch (e) {
    }
    return false;
}

