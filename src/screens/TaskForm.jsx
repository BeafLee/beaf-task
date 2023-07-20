import React from 'react';
import { Text, View, TextInput } from 'react-native';

export default function TaskForm() {
    return (
        <View>
            <Text>Create new task</Text>
            <Text>Title:</Text>
            <TextInput placeholder='Task title'/>
            <Text>Tags:</Text>
            <TextInput placeholder='Task tags'/>
            <Text>Due Date:</Text>
            <TextInput placeholder='Task due date'/>
            <Text>Priority:</Text>
            <TextInput placeholder='Priority'/>
        </View>
    );
}