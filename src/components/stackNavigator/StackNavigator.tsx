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
    StoriesScreen,
    EditStoryScreen,
    StoryDetailsScreen,
    StoryCreateScreen,
} from '@screens';
import { AppTabParamList, RootStackParamList, StoryTabParamList } from '@types';
import Icon from 'react-native-vector-icons/Feather';

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const AppTab = createBottomTabNavigator<AppTabParamList>();

const StoryStack = createNativeStackNavigator<StoryTabParamList>();

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
                        case routes.storyStack:
                            return (
                                <Icon
                                    name={'book-open'}
                                    size={size}
                                    color={color}
                                />
                            );
                        case routes.profileStack:
                            return (
                                <Icon name={'user'} size={size} color={color} />
                            );
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                headerShown: false,
            })}>
            <AppTab.Screen
                name={routes.storyStack}
                component={StoryNavigator}
            />
            <AppTab.Screen
                name={routes.profileStack}
                component={ProfileScreen}
            />
        </AppTab.Navigator>
    );
};

const StoryNavigator = () => {
    return (
        <StoryStack.Navigator>
            <StoryStack.Screen name={routes.story} component={StoryScreen} />
            <StoryStack.Screen
                name={routes.stories}
                component={StoriesScreen}
            />
            <StoryStack.Screen
                name={routes.editStory}
                component={EditStoryScreen}
            />
            <StoryStack.Screen
                name={routes.storyDetails}
                component={StoryDetailsScreen}
            />
            <StoryStack.Screen
                name={routes.storyCreate}
                component={StoryCreateScreen}
            />
        </StoryStack.Navigator>
    );
};

export enum routes {
    app = 'App',
    story = 'Story',
    storyStack = 'StoryStack',
    login = 'Login',
    profile = 'Profile',
    profileStack = 'ProfileStack',
    signUp = 'SignUp',
    start = 'Start',
    stories = 'Stories',
    storyDetails = 'StoryDetails',
    storyCreate = 'StoryCreate',
    addPost = 'AddPost',
    editStory = 'EditStory',
}
