import { useTranslation } from 'react-i18next';
import { FC, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserProfileButton } from './UserProfileButton';
import { HeaderTitle } from '@components/shared';

export const Header: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: UserProfileButton,
            headerTitle: () => <HeaderTitle titleKey={'stories.header'} />,
        });
    }, [t, navigation]);

    return null;
};
