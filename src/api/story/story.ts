import { StoryDetailType, StoryType } from '@types';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const story = {
    post: async (data: StoryType) => {
        try {
            const { uid } = (await auth().currentUser) || {};
            const user = await firestore().collection('users').doc(uid).get();
            const responseAddStory = await firestore()
                .collection('stories')
                .add({
                    ...data,
                    userIds: [uid],
                });
            const responseAddStoryToUser = await firestore()
                .collection('users')
                .doc(uid)
                .update({
                    stories: [...user.data()?.stories, responseAddStory.id],
                });
            return responseAddStoryToUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    get: async (id?: string): Promise<StoryDetailType> => {
        try {
            const response = await firestore()
                .collection('stories')
                .doc(id)
                .get();
            return {
                ...response.data(),
                id: response.id,
            } as StoryDetailType;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    put: async (data: StoryType) => {
        try {
            const { uid } = (await auth().currentUser) || {};
            const response = await firestore()
                .collection('stories')
                .doc(data.id)
                .update({
                    ...data,
                    userIds: [...data.userIds, uid],
                });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    getAll: async (): Promise<StoryType[]> => {
        try {
            const { uid } = (await auth().currentUser) || {};
            const response = await firestore()
                .collection('stories')
                .where('userIds', 'array-contains', uid)
                .get()
                .then(querySnapshot => {
                    return querySnapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            id: doc.id,
                        } as StoryType;
                    });
                });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};
