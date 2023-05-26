import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { client } from '@api/client';

export const useReloadToken = () => {
    useEffect(() => {
        auth().onIdTokenChanged(async user => {
            if (user) {
                const idToken = await user.getIdToken();
                client.defaults.headers.common.Authorization = `${idToken}`;
            }
            return null;
        });
    });
};
