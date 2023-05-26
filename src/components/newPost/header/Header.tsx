import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StoryTabNavigationProp } from '@types';
import { NextStepButton } from '@components/newPost/header/NextStepButton';
import { GoBackButton, HeaderTitle } from '@components/shared';

export const Header: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    useEffect(() => {
        navigation.setOptions({
            headerRight: NextStepButton,
            headerLeft: GoBackButton,
            headerTitle: () => <HeaderTitle titleKey={'newPost.header'} />,
        });
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: 'none',
            },
        });
    }, [t, navigation]);
    return null;
};
