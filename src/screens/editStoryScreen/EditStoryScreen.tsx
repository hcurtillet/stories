import React, { useEffect } from 'react';
import { StoryTabNavigationProp, StoryTabParamList } from '@types';
import { useTranslation } from 'react-i18next';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { routes, StoryForm } from '@components';
import { ScreenContainer } from '@styles';
import { useQuery } from 'react-query';
import api from '@api';

export const EditStoryScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();
    const route = useRoute<RouteProp<StoryTabParamList, routes.editStory>>();
    const { id } = route.params || {};

    const { data = null } = useQuery('storyDetails', () => api.story.get(id));

    useEffect(() => {
        const title = t('story.newStory');
        navigation.setOptions({ title });
    }, []);

    return (
        <ScreenContainer>
            <StoryForm initialValues={data} />
        </ScreenContainer>
    );
};
