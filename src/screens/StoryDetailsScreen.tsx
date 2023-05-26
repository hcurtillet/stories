import React, { useEffect } from 'react';
import { colors } from '@UI';
import { ScreenContainer } from '@UI/containers';
import { useNavigation } from '@react-navigation/native';
import { StoryTabNavigationProp } from '@types';
import { StoryFeed } from '@components/storyFeed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
export const StoryDetailsScreen = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();

    useEffect(() => {
        navigation.setOptions({
            headerRight: editStory,
        });
    }, [navigation]);

    const editStory = () => (
        <TouchableOpacity>
            <Icon name={'edit'} size={30} color={colors.blue} />
        </TouchableOpacity>
    );

    return (
        <ScreenContainer>
            <StoryFeed />
        </ScreenContainer>
    );
};
