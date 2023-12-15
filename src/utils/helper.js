export const typeOf = (valueType) => Object.prototype.toString.call(valueType).slice(8, -1);

export const generateId = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getLevelTreeFolder = (id, depth = 0) => id.split('+')[0].split('.').slice(0, depth).join('.') + '.';

export const getDepthNodeId = (id) => id.split('+')[0].split('.').length - 1;

export const isString = (str) => str !== undefined && str !== null && typeOf(str) === 'String';

export function add3DotsString(str, limit) {
  const dots = '...';
  if (!str) str = '';
  if (!limit) return str;
  if (str.length > limit) {
    // you can also use substr instead of substring
    str = str.substring(0, limit) + dots;
  }
  return str;
}

export const hexToRgb = (hexColor, alpha = 1) => {
  let hex = hexColor.replace('#', '');
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const rgbaToHex = (rgba, forceRemoveAlpha = false) => {
  return (
    '#' +
    rgba
      .replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
      .split(',') // splits them at ","
      .filter((string, index) => !forceRemoveAlpha || index !== 3)
      .map((string) => parseFloat(string)) // Converts them to numbers
      .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
      .map((number) => number.toString(16)) // Converts numbers to hex
      .map((string) => (string.length === 1 ? '0' + string : string)) // Adds 0 when length of one number is 1
      .join('')
  );
};

export function rgbaToHexArgs(r = 0, g = 0, b = 0, a = 1, forceRemoveAlpha = false) {
  return rgbaToHex(`rgb(${r},${g},${b},${a})`, forceRemoveAlpha);
}

export const rgbToObject = (rgbColor) => {
  if (!rgbColor) return '';
  const obj = rgbColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  return {
    red: obj[0],
    green: obj[1],
    blue: obj[2],
  };
};
