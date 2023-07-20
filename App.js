import React, { useState, useEffect } from 'react'

import { EventRegister } from 'react-native-event-listeners'
import { themeContext, theme } from './src/theme'
import Main from './src/screens/Main';


const [mode, setMode] = useState(false);

useEffect(() => {
  let eventListener = EventRegister.addEventListener("changeTheme", (val) => {
    setMode(val);
  });
  return () => {
    EventRegister.removeEventListener(eventListener);
  }
});

export default function App() {
  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <Main />
    </themeContext.Provider>
  );
}
