import color from 'color';

/**
 * Convert a hex value into RGB
 * @param  {String} hex    Hexidecimal color value to change
 * @return {String}        RGB values
 */
function rgb(hex) {
  return color(hex)
    .rgb()
    .array()
    .join(',');
}

export default rgb;
