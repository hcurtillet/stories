import { client } from '@api/client';
import { PostInterface } from '@types';
import { formatToPost, PostDto } from '@api/shared';

export const getPosts =
    (storyId: string) => async (): Promise<PostInterface[]> => {
        try {
            const { data } = await client.get<PostDto[]>(
                `posts/story/${storyId}`,
            );
            return data.map(formatToPost);
        } catch (error) {
            throw error;
        }
    };

export const postPost = async (item: PostInterface): Promise<PostInterface> => {
    try {
        const { data } = await client.post<PostDto>(`/posts`, item);
        return data;
    } catch (error) {
        throw error;
    }
};
