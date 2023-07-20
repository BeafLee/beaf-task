import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import TaskForm from './TaskForm';
import TaskStatistics from './TaskStatistics';
import SettingScreen from './SettingScreen';



const StackHome = createStackNavigator();
const StackSchedule = createStackNavigator();
const StackSetting = createStackNavigator();

const HomeStack = () => {
    return (
        <StackHome.Navigator>
            <StackHome.Screen name="HomeScreen" component={Home} />
            <StackHome.Screen name="TaskList" component={TaskList} />
            <StackHome.Screen name="TaskDetail" component={TaskDetail} />
            <StackHome.Screen name="TaskForm" component={TaskForm} />
        </StackHome.Navigator>
    );
}

const ScheduleStack = () => {
    return (
        <StackSchedule.Navigator>
            <StackSchedule.Screen name="TaskStatistics" component={TaskStatistics} />
        </StackSchedule.Navigator>
    );
}

const SettingStack = () => {
    return (
        <StackSetting.Navigator>
            <StackSetting.Screen name="SettingScreen" component={SettingScreen} />
        </StackSetting.Navigator>
    );
}
const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Schedule':
                            iconName = focused ? 'calendar' : 'calendar-outline';
                            break;
                        case 'Setting':
                            iconName = focused ? 'settings' : 'settings-outline';
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                // tabBarActiveTintColor: '',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })} >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Schedule" component={ScheduleStack} />
                <Tab.Screen name="Setting" component={SettingStack} />
            </Tab.Navigator>
            {/* <StatusBar style="auto" /> */}
        </NavigationContainer >
    );
};
export default Main;



