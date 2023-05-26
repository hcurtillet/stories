import { client } from '@api/client';
import { StoryInterface } from '@types';
import { StoryDto } from '@api/shared';
import { formatToStory } from '@api/shared/helpers';

export const getStory = (id: string) => async (): Promise<StoryInterface> => {
    try {
        const { data } = await client.get<StoryDto>(`/stories/${id}`);
        return formatToStory(data);
    } catch (error) {
        throw error;
    }
};

export const getStories = async (): Promise<StoryInterface[]> => {
    try {
        const { data } = await client.get<StoryDto[]>(`/stories/myStories`);
        if (!data) {
            return [];
        }
        return data.map(formatToStory);
    } catch (error) {
        throw error;
    }
};

export const postStory = async (
    item: StoryInterface,
): Promise<StoryInterface> => {
    try {
        const { data } = await client.post<StoryDto>(`/stories`, item);
        return formatToStory(data);
    } catch (error) {
        throw error;
    }
};

export const putStory = (id: string) => async (item: StoryInterface) => {
    try {
        const { data } = await client.put<StoryDto>(`/stories/${id}`, item);
        return formatToStory(data);
    } catch (error) {
        throw error;
    }
};

export const deleteStory = (id: string) => async () => {
    try {
        return await client.delete(`/stories/${id}`);
    } catch (error) {
        throw error;
    }
};
