import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StoryTabNavigationProp } from '@types';
import { routes, StoriesList } from '@components';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { colors, ScreenContainer } from '@styles';
import { useQuery } from 'react-query';
import api from '@api';

export const StoriesScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    const { data } = useQuery('stories', api.story.getAll);

    useEffect(() => {
        const title = t('stories.header');
        navigation.setOptions({
            headerRight: addStory,
            title,
        });
    }, []);

    const addStory = () => {
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

    return (
        <ScreenContainer>
            <StoriesList stories={data ?? []} />
        </ScreenContainer>
    );
};
