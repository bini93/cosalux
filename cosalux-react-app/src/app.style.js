import { createGlobalStyle } from'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial';
    margin: 0;
  }
  h2 {
    font-size: 54px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 20px 0;
  }
  h3 {
    font-size: 27px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 15px 0;
  }

  p {
    font-size: 14px;
    margin: 5px 0;
  }
`

export const theme = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    tertiary: '#393939',

    backgroundBlack: '#000000',
    backgroundWhite: '#ffffff',
    backgroundGray: '#393939',
    backgroundDarkGray: '#1B1B1B',
    backgroundLightGray: '#F8F8F8',
  },
};


/**
  color-pallete:
  - primary: #000000      black
  - secondary: #ffffff    white
  - tertiary: #393939     gray
  - quaternary: #1B1B1B   dark gray
  - quinary: #F8F8F8      light gray

*/