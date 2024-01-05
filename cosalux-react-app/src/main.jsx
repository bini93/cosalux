import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider} from 'styled-components';

import { theme, GlobalStyle } from './theme/theme.js';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </ThemeProvider>
  </React.StrictMode>,
)
