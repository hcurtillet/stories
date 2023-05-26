import React, { FC } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StoryTabNavigationProp, StoryTabParamList } from '@types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import { TouchableOpacity } from 'react-native';
import { routes } from '@components';

export const NewPostButton: FC = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const route = useRoute<RouteProp<StoryTabParamList, 'StoryDetails'>>();
    const { id } = route.params;

    const handleOnPress = () => {
        navigation.navigate(routes.newPost, { storyId: id });
    };

    return (
        <TouchableOpacity onPress={handleOnPress}>
            <Icon name={'camera-retro'} size={30} color={colors.blue} />
        </TouchableOpacity>
    );
};
