import { client } from '@api/client';
import { StoryType } from '@types';
import { StoryDto } from '@api/shared';
import { formatToStory } from '@api/shared/helpers';

export const getStory = async (id: string): Promise<StoryType> => {
    try {
        const { data } = await client.get<StoryDto>(`/stories/${id}`);
        return formatToStory(data);
    } catch (error) {
        throw error;
    }
};

export const getStories = async (): Promise<StoryType[]> => {
    try {
        const { data } = await client.get<StoryDto[]>(`/stories`);
        if (!data) {
            return [];
        }
        return data.map(formatToStory);
    } catch (error) {
        throw error;
    }
};

export const postStory =
    () =>
    async (item: StoryType): Promise<StoryType> => {
        try {
            const { data } = await client.post<StoryDto>(`/stories`, item);
            return formatToStory(data);
        } catch (error) {
            throw error;
        }
    };

export const putStory = (id: string) => async (item: StoryType) => {
    try {
        const { data } = await client.put<StoryDto>(`/stories/${id}`, item);
        return formatToStory(data);
    } catch (error) {
        throw error;
    }
};

export const deleteStory = async (id: string) => {
    try {
        return await client.delete(`/stories/${id}`);
    } catch (error) {
        throw error;
    }
};
