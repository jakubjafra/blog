const darkBlue = `#3a0ca3`;
const textBase = `rgba(0,0,0,0.9)`;

export default {
  colors: {
    text: textBase,
    primary: darkBlue,
  },
  styles: {
    p: {
      lineHeight: 1.5,
    },
    code: {
      fontSize: '0.8em',
    },
    a: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
};
