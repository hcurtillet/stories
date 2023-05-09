import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StoryTabNavigationProp } from '@types';
import { GoBackButton } from '@components/shared';
import { NextStepButton } from '@components/newPost/Header/NextStepButton';

export const Header: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    useEffect(() => {
        navigation.setOptions({
            headerRight: NextStepButton,
            headerLeft: GoBackButton,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
            title: t('newPost.header') ?? '',
        });
    }, [t, navigation]);
    return null;
};
