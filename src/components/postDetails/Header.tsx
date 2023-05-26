import { FC, useEffect } from 'react';
import { StoryTabNavigationProp } from '@types';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { GoBackButton, HeaderTitle } from '@components/shared';

export const Header: FC = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const { t } = useTranslation();
    useEffect(() => {
        navigation.setOptions({
            headerLeft: GoBackButton,
            headerTitle: () => <HeaderTitle titleKey={'postDetails.header'} />,
        });
    }, [navigation, t]);
    return null;
};
