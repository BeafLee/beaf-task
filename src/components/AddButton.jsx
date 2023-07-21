import React, { useContext } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import themeContext from '../themeContext';

import { Ionicons } from '@expo/vector-icons';

export default function ButtonStyled({ children, style, ...restOfProps }) {
    const theme = useContext(themeContext);
    return (
        <TouchableWithoutFeedback
            {...restOfProps}
        >
            <View style={[{
                backgroundColor: theme.colors.cancel,
                borderRadius: 60,
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 10,
                right: 10,
            }, style]}>
                <Ionicons name="add" size={30} color="white"/>
            </View>

        </TouchableWithoutFeedback >
    );
};

