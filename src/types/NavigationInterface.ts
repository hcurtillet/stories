import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

export type AppTabNavigationProp = NativeStackNavigationProp<AppTabParamList>;

export type StoryTabParamList = {
    Story: { id: string };
    Stories: undefined;
    NewPost: undefined;
    EditStory: { id: string };
    StoryDetails: { id: string };
    StoryCreate: undefined;
};

export type StoryTabNavigationProp =
    NativeStackNavigationProp<StoryTabParamList>;

export type ProfileTabParamList = {
    Profile: undefined;
    EditProfile: undefined;
};

export type ProfileTabNavigationProp =
    NativeStackNavigationProp<ProfileTabParamList>;
