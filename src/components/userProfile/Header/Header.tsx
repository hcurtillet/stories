import { useNavigation } from '@react-navigation/native';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LogOutButton } from '@components/userProfile/Header/LogOutButton';

export const Header: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    useEffect(() => {
        const title = t('profile.header');
        navigation.setOptions({
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
            title,
            headerRight: LogOutButton,
        });
    }, [t, navigation]);
    return null;
};
