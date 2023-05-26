import React, { FC } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import { routes } from '@components';
import { StoryTabNavigationProp, StoryTabParamList } from '@types';

export const AddUserButton: FC = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const {
        params: { storyId },
    } = useRoute<RouteProp<StoryTabParamList, routes.userList>>();

    const onPress = () => {
        navigation.navigate(routes.addStoryMembers, {
            storyId,
            isNewStory: false,
        });
    };
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name={'user-plus'} size={30} color={colors.blue} />
        </TouchableOpacity>
    );
};
