import React, { useContext } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import themeContext from '../themeContext';

export default function ButtonStyled({ children, style, ...restOfProps }) {
    const theme = useContext(themeContext);
    return (
        <TouchableWithoutFeedback
            {...restOfProps}
        >
            <View style={[{
                backgroundColor: theme.colors.primary,
                borderRadius: 10,
                margin: 10,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }, style]}>
                <Text style={{
                    color: theme.colors.textButton,
                }}
                > {children}</Text>
            </View>

        </TouchableWithoutFeedback >
    );
};

