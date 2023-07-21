import React, { useContext } from 'react';
import { Text, View, TextInput } from 'react-native';
import themeContext from '../themeContext';

export default function TextStyled({ children, style, ...restOfProps }) {
    const theme = useContext(themeContext);
    const styles = theme.styles.input;
    return (
        <TextInput
            style={[{
                color: theme.colors.textPrimary,
                borderColor: theme.colors.textPrimary
            }, styles, style]}
            placeholderTextColor={theme.colors.textSecondary}
            {...restOfProps}
        />

    );
};