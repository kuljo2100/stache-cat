import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './font.css'
import CustomCursor from './CustomCursor.jsx'

const theme = extendTheme({
  fonts: {
    // Add your fonts as custom keys or override existing ones
    heading: 'FontA, sans-serif',
    body: 'FontC, sans-serif',
    customFont1: 'FontA, sans-serif',
    customFont2: 'FontB, sans-serif',
    customFont3: 'FontC, sans-serif',
    customFont4: 'FontD, sans-serif',
  },
  styles: {
    global: {
      // Scrollbar styles for WebKit-based browsers
      '::-webkit-scrollbar': {
        width: '8px',
        borderRadius: '10px',
        scrollbarColor: '#D4AF37 transparent'
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: 'darkgrey',
        borderRadius: '6px',
        border: '3px solid #D4AF37',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      // Scrollbar styles for Firefox
      'html': {
        scrollbarWidth: 'thin',
        scrollbarColor: '#D4AF37 transparent',
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CustomCursor />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
