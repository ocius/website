// Define what props.theme will look like
const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 3, // rem
    outerMargin: 1.5, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 54, // rem
      md: 72, // rem
      lg: 121.6, // rem
    },
    breakpoints: {
      xs: 0, // px
      sm: 576, // px
      md: 768, // px
      lg: 992, // px
    },
  },

  colors: {
    themePrimary: '#4ab4e6',
    themePrimaryLight: '#60d2f6',
    themeDark: '#1f3643',
    themeDarker: '#001826',
    neutralPrimary: '#6f7175',
    neutralLight: '#f7f7f7',
    neutralLightAlt: '#efefef',
    bgPrimary: '#ffffff',
  },

  fonts: {
    main: "'Helvetica Neue LT', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    bold: "'Helvetica Neue LT Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
};

export default theme;
