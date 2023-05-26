import auth from '@react-native-firebase/auth';
import { client } from '@api/client';
import { UserInterface } from '@types';
import { UserDto } from '@api/shared';
import { formatToUser } from '@api/shared/helpers';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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
        client.defaults.headers.common.Authorization = `Bearer ${token}`;
        return true;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        await auth().signOut();
        delete client.defaults.headers.common.Authorization;
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
        client.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {
        throw error;
    }
};

export const getUserInfo = async (): Promise<UserInterface> => {
    try {
        const { data } = await client.get<UserDto>('users/me');
        return formatToUser(data);
    } catch (error) {
        throw error;
    }
};

export const updateUserInfo = async (
    entity: UserInterface,
): Promise<UserInterface> => {
    try {
        const { data } = await client.put<UserDto>(
            `users/${entity.id}`,
            entity,
        );
        return formatToUser(data);
    } catch (error) {
        throw error;
    }
};
export const onGoogleButtonPress = async () => {
    try {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
        });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    } catch (error) {
        throw error;
    }
};
