import auth from '@react-native-firebase/auth';
import { client } from '@api/client';
import { UserType } from '@types';

export const login = async (
    email: string,
    password: string,
): Promise<boolean> => {
    try {
        const responseLogin = await auth().signInWithEmailAndPassword(
            email,
            password,
        );
        const token = responseLogin.user.getIdToken();
        client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return true;
    } catch (error) {
        throw error;
    }
};

export const signUp = async (email: string, password: string) => {
    try {
        const responseSignUp = await auth().createUserWithEmailAndPassword(
            email,
            password,
        );
        const token = responseSignUp.user.getIdToken();
        client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
        throw error;
    }
};

export const getUserInfo = async () => {
    try {
        console.log('headers', client.defaults.headers.common.Authorization);
        const { data } = await client.get('users/me');
        console.log('data', data);
        return data;
    } catch (error) {
        throw error;
    }
};

export const updateUserInfo = async (data: UserType) => {
    try {
        const responseUpdate = await client.put('users/me', data);
        return responseUpdate.data;
    } catch (error) {
        throw error;
    }
};
