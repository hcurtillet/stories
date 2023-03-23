import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '@UI';
import { ScreenContainer } from '@UI/screenContainer';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { StoryTabNavigationProp } from '@types';
import { routes } from '@components';

export const StoryScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    useEffect(() => {
        const title = t('story.header');
        navigation.setOptions({
            headerLeft: stories,
            headerRight: addPost,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
            title,
        });
    }, []);

    const stories = () => {
        return (
            <TouchableOpacity>
                <Icon
                    name={'book'}
                    size={30}
                    color={colors.blue}
                    onPress={() => navigation.navigate(routes.stories)}
                />
            </TouchableOpacity>
        );
    };
    const addPost = () => {
        return (
            <TouchableOpacity>
                <Icon name={'plus-square'} size={30} color={colors.blue} />
            </TouchableOpacity>
        );
    };

    return (
        <ScreenContainer>
            <Text>Home Screen</Text>
        </ScreenContainer>
    );
};
