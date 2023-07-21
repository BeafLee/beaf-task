import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../themeContext'

import { getTheme, setTheme } from '../asyncStorage';

import ButtonStyled from '../components/ButtonStyled';
import TextStyled from '../components/TextStyled';
import InputStyled from '../components/InputStyled';

export default function SettingScreen() {
    const theme = useContext(themeContext);
    const iconSize = 40;

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        getTheme().then(theme => {
            setIsDark(theme);
            EventRegister.emit("changeTheme", theme);
        });
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background, padding: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TextStyled style={{}}>Choose the theme:</TextStyled>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    {isDark ? <Ionicons name="sunny-outline" size={iconSize} color="silver" /> : <Ionicons name="sunny" size={iconSize} color="gold" />}

                    <Switch value={isDark}
                        onValueChange={(value) => {
                            setIsDark(value);
                            setTheme(value);
                            EventRegister.emit("changeTheme", value);
                        }}
                    />
                    {isDark ? <Ionicons name="moon" size={iconSize} color="gold" /> : <Ionicons name="moon-outline" size={iconSize} color="black" />}
                </View>
            </View>

            {/* <ButtonStyled onPress={() => alert('siu1')}>Button Test</ButtonStyled>
            <TextStyled>Text Test</TextStyled>
            <InputStyled placeholder='input test'  /> */}
        </View>
    );
}