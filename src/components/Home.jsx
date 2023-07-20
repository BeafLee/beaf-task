import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View>
            <Text>This is the Home screen</Text>
            <TouchableWithoutFeedback>
                <Text>Go to </Text>
            </TouchableWithoutFeedback>
            
        </View>
    );
}