import React, { useEffect } from 'react';
import { colors } from '@UI';
import { ScreenContainer } from '@UI/screenContainer';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StoryTabNavigationProp, StoryTabParamList } from '@types';
import { routes, StoryDetails } from '@components';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
export const StoryDetailsScreen = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();

    useEffect(() => {
        navigation.setOptions({
            headerRight: editStory,
        });
    }, [navigation]);

    const editStory = () => {
        return (
            <TouchableOpacity>
                <Icon name={'edit'} size={30} color={colors.blue} />
            </TouchableOpacity>
        );
    };

    return (
        <ScreenContainer>
            <StoryDetails />
        </ScreenContainer>
    );
};
