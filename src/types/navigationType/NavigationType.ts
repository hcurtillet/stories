import React from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationType = {
    name: string;
    screen: React.ComponentType<any>;
};

export type RootStackParamList = {
    Login: undefined;
    Start: undefined;

    SignUp: undefined;
    App: undefined;
};
export type RootScreenNavigationProp =
    NativeStackNavigationProp<RootStackParamList>;

export type AppTabParamList = {
    StoryStack: undefined;
    ProfileStack: undefined;
};

export type AppTabScreenNavigationProp =
    NativeStackNavigationProp<AppTabParamList>;

export type StoryTabParamList = {
    Story: undefined;
    Stories: undefined;
    NewPost: undefined;
    EditStory: { id: string } | undefined;
    StoryDetails: { id: string };
};

export type StoryTabNavigationProp =
    NativeStackNavigationProp<StoryTabParamList>;

export type AppTabNavigationProp = NativeStackNavigationProp<AppTabParamList>;
