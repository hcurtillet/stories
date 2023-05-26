import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StoryTabNavigationProp } from '@types';
import { NewPostButton } from '@components/storyFeed/header/NewPostButton';
import { GoBackButton, HeaderTitle } from '@components/shared';

export const Header: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: GoBackButton,
            headerRight: NewPostButton,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
            headerTitle: () => <HeaderTitle titleKey={'story.header'} />,
        });
    }, [t, navigation]);
    return null;
};
