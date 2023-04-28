import React, { useEffect, useState } from 'react';
import { ScreenContainer } from '@UI/screenContainer';
import { Loader } from '@UI/loader';
import { routes } from '@components';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProp } from '@types';
import { useUserInfoQuery } from '@api/authentication';
import { useReloadToken } from '@components/shared';

export const StartScreen = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const navigation = useNavigation<RootScreenNavigationProp>();
    const { refetch } = useUserInfoQuery();
    useReloadToken();

    useEffect(() => {
        if (!loading) {
            return;
        }
        auth().onAuthStateChanged(userState => {
            setUser(userState);
            refetch();
            if (loading) {
                setLoading(false);
            }
        });
    }, [loading]);

    useEffect(() => {
        if (user) {
            navigation.navigate(routes.app);
        } else {
            navigation.navigate(routes.login);
        }
    }, [navigation, user]);

    return (
        <ScreenContainer>
            <Loader />
        </ScreenContainer>
    );
};
