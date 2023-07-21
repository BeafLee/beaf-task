import React, { useState, useEffect } from 'react'

import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';

import { EventRegister } from 'react-native-event-listeners'
import theme from './src/theme'
import themeContext from './src/themeContext'
import Main from './src/screens/Main';

import { getTheme, setTheme } from './src/asyncStorage';


export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    getTheme().then(theme => {
      setMode(theme);
      EventRegister.emit("changeTheme", theme);
    });
  }, []);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (val) => {
      setMode(val);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    }
  });

  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>
        <Main />
      </NavigationContainer>
    </themeContext.Provider>
  );
}
