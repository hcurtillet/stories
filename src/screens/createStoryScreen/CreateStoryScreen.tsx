import React, { useEffect } from 'react';
import { StoryTabNavigationProp } from '@types';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StoryForm } from '@components';
import { ScreenContainer } from '@styles';

export const CreateStoryScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    useEffect(() => {
        const title = t('story.newStory');
        navigation.setOptions({ title });
    }, []);

    return (
        <ScreenContainer>
            <StoryForm />
        </ScreenContainer>
    );
};
