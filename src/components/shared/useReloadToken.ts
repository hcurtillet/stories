import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { client } from '@api/client';

export const useReloadToken = () => {
    useEffect(() => {
        (async () => {
            const token = await auth().currentUser?.getIdToken();
            if (token) {
                client.defaults.headers.common['Authorization'] = `${token}`;
            }
        })();
    });
};
