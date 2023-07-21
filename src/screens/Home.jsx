import React, { useContext } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

import themeContext from '../themeContext';

import TextStyled from '../components/TextStyled';
import AddButton from '../components/AddButton';


export default function Home({ navigation }) {
    const theme = useContext(themeContext);

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Text>Task for this week</Text>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('TaskList')}>
                <TextStyled>Go to task list</TextStyled>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TaskForm')}>
                <TextStyled>New Task</TextStyled>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TaskDetail')}>
                <TextStyled>Detail</TextStyled>
            </TouchableWithoutFeedback>

            <AddButton onPress={() => navigation.navigate('TaskForm')} />
        </View>
    );
}