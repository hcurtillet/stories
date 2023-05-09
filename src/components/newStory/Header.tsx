import { FC, useEffect } from 'react';
import { StoryTabNavigationProp } from '@types';
import { useNavigation } from '@react-navigation/native';
import { GoBackButton } from '@components/shared';
import { useTranslation } from 'react-i18next';

export const Header: FC = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const { t } = useTranslation();
    useEffect(() => {
        navigation.setOptions({
            headerLeft: GoBackButton,
            title: t('story.newStory') as string,
        });
    }, [navigation]);
    return null;
};
