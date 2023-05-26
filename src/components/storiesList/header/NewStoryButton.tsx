import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StoryTabNavigationProp } from '@types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import { routes } from '@components';

export const NewStoryButton: FC = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();

    return (
        <TouchableOpacity>
            <Icon
                name={'plus-square'}
                size={30}
                color={colors.blue}
                onPress={() => navigation.navigate(routes.editStory)}
            />
        </TouchableOpacity>
    );
};
