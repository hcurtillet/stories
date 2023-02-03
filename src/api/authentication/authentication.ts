import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const authentication = {
    login: async (email: string, password: string) => {
        try {
            const responseLogin = await auth().signInWithEmailAndPassword(
                email,
                password,
            );
            const { uid } = responseLogin.user || {};
            const responseGetUser = await firestore()
                .collection('users')
                .doc(uid)
                .get();
            if (!responseGetUser.exists) {
                await firestore().collection('users').doc(uid).set({
                    email,
                    stories: [],
                });
            }
        } catch (error) {
            throw error;
        }
    },
    signUp: async (email: string, password: string) => {
        try {
            const responseSignUp = await auth().createUserWithEmailAndPassword(
                email,
                password,
            );
            const { uid } = responseSignUp.user || {};
            const responseCreateUser = await firestore()
                .collection('users')
                .doc(uid)
                .set({
                    email,
                    stories: [],
                });
        } catch (error) {
            throw error;
        }
    },
};
