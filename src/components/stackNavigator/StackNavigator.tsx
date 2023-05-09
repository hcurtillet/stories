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
    NewPostScreen,
    EditProfileScreen,
    NewStoryScreen,
    AddStoryMembersScreen,
} from '@screens';
import {
    AppTabParamList,
    ProfileTabParamList,
    RootStackParamList,
    StoryTabParamList,
} from '@types';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const AppTab = createBottomTabNavigator<AppTabParamList>();

export const StackNavigator = () => (
    <NavigationContainer>
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none',
                gestureEnabled: false,
            }}>
            <HomeStack.Screen name={routes.start} component={StartScreen} />
            <HomeStack.Screen name={routes.login} component={LoginScreen} />
            <HomeStack.Screen name={routes.signUp} component={SignUpScreen} />
            <HomeStack.Screen name={routes.app} component={AppNavigator} />
        </HomeStack.Navigator>
    </NavigationContainer>
);
export const AppNavigator = () => (
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
                        return <Icon name={'user'} size={size} color={color} />;
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
        })}>
        <AppTab.Screen name={routes.storyStack} component={StoryNavigator} />
        <AppTab.Screen
            name={routes.profileStack}
            component={ProfileNavigator}
        />
    </AppTab.Navigator>
);

const StoryStack = createNativeStackNavigator<StoryTabParamList>();

const StoryNavigator = () => (
    <StoryStack.Navigator>
        <StoryStack.Screen name={routes.stories} component={StoriesScreen} />
        <StoryStack.Screen name={routes.story} component={StoryScreen} />
        <StoryStack.Screen
            name={routes.editStory}
            component={EditStoryScreen}
        />
        <StoryStack.Screen
            name={routes.storyDetails}
            component={StoryDetailsScreen}
        />
        <StoryStack.Screen name={routes.newStory} component={NewStoryScreen} />
        <StoryStack.Screen
            name={routes.addStoryMembers}
            component={AddStoryMembersScreen}
        />
        <StoryStack.Screen name={routes.newPost} component={NewPostScreen} />
    </StoryStack.Navigator>
);

const ProfileStack = createNativeStackNavigator<ProfileTabParamList>();
const ProfileNavigator = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name={routes.profile} component={ProfileScreen} />
        <ProfileStack.Screen
            name={routes.editProfile}
            component={EditProfileScreen}
        />
    </ProfileStack.Navigator>
);

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
    addPost = 'AddPost',
    editStory = 'EditStory',
    editProfile = 'EditProfile',
    newPost = 'NewPost',
    newStory = 'NewStory',
    addStoryMembers = 'AddStoryMembers',
}
