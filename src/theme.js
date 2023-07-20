import React, {createContext} from 'react'

const themeContext = createContext({});

const theme = {
  light: {
    style,
    colors: {
      background: '#fefefe',
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '',
      secondary: '',
      cancel: '',
    }
  },
  dark: {
    style,
    colors: {
      background: '#121212',
      textPrimary: '#fefefe',
      textSecondary: '#grey',
      primary: '',
      secondary: '',
      cancel: '',
    }
  }

}

const style = {
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: 'System'
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
}
export default {theme, themeContext}