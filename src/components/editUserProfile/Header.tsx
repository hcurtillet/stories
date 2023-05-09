import { useNavigation } from '@react-navigation/native';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GoBackButton } from '@components/shared';

export const Header: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    useEffect(() => {
        const title = t('profile.editProfile');
        navigation.setOptions({
            headerLeft: GoBackButton,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
            title,
        });
    }, [t, navigation]);
    return null;
};
