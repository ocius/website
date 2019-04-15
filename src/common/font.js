const fonts = {
  main: ["'Helvetica Neue'", "'Helvetica'", "'Arial'", 'sans-serif']
};

/**
 * Return a font stack
 * @param  {String} family The name of the font family
 * @return {String}        Font stack
 */
export default function font(family) {
  const fontFamily = fonts[family];
  if (!fontFamily) return '';
  return fontFamily.join(', ');
}
