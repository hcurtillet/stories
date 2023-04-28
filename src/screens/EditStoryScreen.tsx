import React, { useEffect } from 'react';
import { StoryTabNavigationProp } from '@types';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StoryDetails } from '@components';
import { ScreenContainer } from '@UI/screenContainer';

export const EditStoryScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    useEffect(() => {
        const title = t('storyFeed.newStory');
        navigation.setOptions({ title });
    }, [t, navigation]);

    return (
        <ScreenContainer>
            <StoryDetails />
        </ScreenContainer>
    );
};
