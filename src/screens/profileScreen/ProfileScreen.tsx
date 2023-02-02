import React from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from '@styles';
import { Button, routes } from '@components';
import auth from '@react-native-firebase/auth';
import { RootScreenNavigationProp } from '@types';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export const ProfileScreen = () => {
    const navigation = useNavigation<RootScreenNavigationProp>();
    const { t } = useTranslation();
    const signOut = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!');
                navigation.navigate(routes.login);
            });
    };
    return (
        <ScreenContainer>
            <Button onPress={signOut} title={t('authentication.logout')} />
        </ScreenContainer>
    );
};
