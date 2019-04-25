const fonts = {
  main: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    '"Fira Sans"',
    '"Droid Sans"',
    '"Helvetica Neue"',
    'sans-serif'
  ]
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
