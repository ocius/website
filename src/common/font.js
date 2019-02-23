const fonts = {
  grotesk: ["'aktiv-grotesk-std'", "'Helvetica Neue'", "'Helvetica'", "'Arial'", 'sans-serif'],
  effra: ["'Effra'", "'Georgia'", "'Times'", "'Times New Roman'", 'serif']
};

/**
 * Return a font stack
 * @param  {String} family The name of the font family; one of "grotesk", "effra"
 * @return {String}        Font stack
 */
export default function font(family) {
  const fontFamily = fonts[family];
  if (!fontFamily) return '';
  return fontFamily.join(', ');
}
