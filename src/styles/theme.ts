import { css } from 'styled-components';

export const theme = {
  typography: {
    fontStyle: 'Montserrat, sans-serif, serif',
    fontSize: {
      xs: '12px',
      s: '14px',
      m: '16px',
      r: '22px',
      l: '32px',
      xl: '40px',
      xxl: '68px',
      mobXl: '34px'
    },
    fontWeight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900
    }
  },
  colors: {
    dark: '#212A31',
    primary: '#14B9B3',
    secondary: '#636569',
    white: '#fff',
    gray: '#F9F9F9',
    lightGray: '#ebebeb',
    disable: '#ADADAD',
    backgroundGray: '#f7f7f9',
    backgroundYellow: '#FDC82F',
    error: '#EB3B3C'
  },
  width: {
    normal: '84.72222%',
    small: '65.27778%',
    mobileMax: '500px'
  },
  device: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 375px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(max-width: 1199px)`,
    desktop: `(max-width: 1440px)`,
    desktopL: `(max-width: 1920px)`
  },
  index: {
    down: 1,
    middle: 10,
    top: 100,
    max: 1000
  }
};

export const customScroll = css`
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.lightGray};
  }

  &::-webkit-scrollbar-thumb {
    background: #aeaeae;
  }
`;
