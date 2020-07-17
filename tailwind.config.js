/**
 * Defining Colours
 */

const white = '#fffffe';
const gray900 = '#00214d';
const gray800 = '#1b2d45';

const primary = '#00ebc7';
const secondary = '#ff5470';
const tertiary = '#fde24f';

module.exports = {
  purge: [],
  theme: {
    backgroundColor: theme => ({
      // make tailwindcss default colour palette available
      ...theme('colors'),
      white,
      'gray-900': gray900,
      'gray-800': gray800,
      primary,
      secondary,
      tertiary
    }),
    textColor: theme => ({
      // make tailwindcss default colour palette available
      ...theme('colors'),
      white,
      'gray-900': gray900,
      'gray-800': gray800,
      primary,
      secondary,
      tertiary
    }),
    fontSize: {
      /* should only be use for the root element */
      root: '18px',
      smallest: '0.512rem',
      smaller: '0.64rem',
      small: '0.8rem',
      base: '1rem',
      medium: '1.25rem',
      large: '1.563rem',
      larger: '1.953rem',
      xl: '2.441rem',
      xxl: '3.052em'
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {},
  plugins: []
};
