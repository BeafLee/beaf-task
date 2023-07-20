import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Task for this week</Text>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('TaskList')}>
                <Text>Go to task list</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TaskForm')}>
                <Text>New Task</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TaskDetail')}>
                <Text>Detail</Text>
            </TouchableWithoutFeedback>
            
        </View>
    );
}