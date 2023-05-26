import React, { useEffect, useState } from 'react';
import { ScreenContainer } from '@UI/containers';
import { Loader } from '@UI/loader';
import { routes } from '@components';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProp } from '@types';
import { client } from '@api/client';

export const StartScreen = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigation = useNavigation<RootScreenNavigationProp>();

    useEffect(() => {
        if (auth().currentUser) {
            auth()
                .currentUser?.getIdTokenResult()
                .then(token => {
                    client.defaults.headers.common.Authorization = token.token;
                    setIsAuthenticated(true);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (isLoading) {
            return;
        }
        if (isAuthenticated) {
            navigation.navigate(routes.app);
        } else {
            navigation.navigate(routes.login);
        }
    }, [navigation, isAuthenticated, isLoading]);

    return (
        <ScreenContainer>
            <Loader />
        </ScreenContainer>
    );
};
