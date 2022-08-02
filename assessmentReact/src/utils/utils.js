/**
 * 判断类型
 * @param {String} type 判断的类型
 * @param {Any} data 传入的参数
 * @returns boolean
 */
const isType = (type, data) => {
  return (
    Object.prototype.toString.call(data).replace(/\[object\s|\]/g, '') === type
  );
};

/**
 * 判断是不是字符串
 * @param {String} value 传入的值
 */
export const isString = (value) => {
  return isType('String', value);
};

/**
 * 判断是不是数字
 * @param {Number} value 传入的值
 */
export const isNumber = (value) => {
  return isType('Number', value);
};

/**
 * 判断是不是对象
 * @param {Object} value 传入的值
 */
export const isObject = (value) => {
  return isType('Object', value);
};

/**
 * 判断是不是数组
 * @param {Array} value 传入的值
 */
export const isArray = (value) => {
  return isType('Array', value);
};
