import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    StoryScreen,
    LoginScreen,
    ProfileScreen,
    SignUpScreen,
    StartScreen,
} from '@screens';
import { RootStackParamList } from '@types';
import Icon from 'react-native-vector-icons/Feather';

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const AppTab = createBottomTabNavigator();

export const StackNavigator = () => {
    return (
        <NavigationContainer>
            <HomeStack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'none',
                    gestureEnabled: false,
                }}>
                <HomeStack.Screen name={routes.start} component={StartScreen} />
                <HomeStack.Screen name={routes.login} component={LoginScreen} />
                <HomeStack.Screen
                    name={routes.signUp}
                    component={SignUpScreen}
                />
                <HomeStack.Screen name={routes.app} component={AppNavigator} />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
};
export const AppNavigator = () => {
    return (
        <AppTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName = '';
                    switch (route.name) {
                        case routes.home:
                            return (
                                <Icon
                                    name={'book-open'}
                                    size={size}
                                    color={color}
                                />
                            );
                        case routes.profile:
                            return (
                                <Icon name={'user'} size={size} color={color} />
                            );
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}>
            <AppTab.Screen name={routes.home} component={StoryScreen} />
            <AppTab.Screen name={routes.profile} component={ProfileScreen} />
        </AppTab.Navigator>
    );
};

export enum routes {
    app = 'App',
    home = 'Story',
    login = 'Login',
    profile = 'Profile',
    signUp = 'SignUp',
    start = 'Start',
}
