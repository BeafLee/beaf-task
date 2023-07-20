import React, { useState, useContext } from 'react';
import { Text, View, Switch } from 'react-native';

import { EventRegister } from 'react-native-event-listeners';
import {themeContext} from '../theme'

const [mode, setMode] = useState(false);
const theme = useContext(themeContext);

export default function SettingScreen() {
    return (
        <View style={{backgroundColor: theme.Color.background}}>
            <Text>This is the setting screen</Text>
            <Switch value={mode}
                onValueChange={() => {
                    setMode((value) => !value);
                    EventRegister.emit("changeTheme", mode);
                }}
            />
        </View>
    );
}