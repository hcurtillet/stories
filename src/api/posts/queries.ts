import { client } from '@api/client';

export const getPosts = async (storyId: string) => {
    try {
        client.get(`posts/story/${storyId}`);
    } catch (error) {
        throw error;
    }
};
