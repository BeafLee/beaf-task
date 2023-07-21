import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import themeContext from '../themeContext';

export default function TextStyled({ children, style, type, ...restOfProps }) {
    const theme = useContext(themeContext);
    const styles = theme.styles.textBody;
    return (
        <Text style={[{ color: theme.colors.textPrimary }, styles, style]}
            {...restOfProps} 
        >
            {children}
        </Text>
    );
};
