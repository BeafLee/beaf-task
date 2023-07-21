const styles = {
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
  },
  textBody: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: 16,
  }
}

const theme = {
  light: {
    styles,
    colors: {
      background: '#f7f7f7',
      textPrimary: '#24292e',
      textSecondary: '#586069',
      textButton: 'whitesmoke',
      primary: '#114358',
      secondary: '#f2aa1f',
      cancel: '#ff3b3f',
    },
    statusBar: 'dark'
  },
  dark: {
    styles,
    colors: {
      background: '#191919',
      textPrimary: '#fefefe',
      textSecondary: '#cecfc9',
      textButton: 'whitesmoke',
      primary: '#276e90',
      secondary: '#a9a9a9',
      cancel: '#ff3b3f',
    },
    statusBar: 'light'
  }

}
export default theme