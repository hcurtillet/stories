import {
    deleteStory,
    getStories,
    getStory,
    postStory,
    putStory,
} from './queries';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { StoryInterface } from '@types';

export const useStoriesQuery = () => {
    const queryKey = ['stories'];
    const queryFn = getStories;
    const options = {};
    return useQuery(queryKey, queryFn, options);
};

export const useStoryQuery = (id: string) => {
    const queryKey = ['story', { id }];
    const queryFn = getStory(id);
    const options = {};
    return useQuery(queryKey, queryFn, options);
};

export const useStoryCreateMutation = (
    handleOnSuccess?: (storyId: string) => void,
) => {
    const queryClient = useQueryClient();
    const mutationKey = ['story-create'];
    const mutationFn = postStory;
    const options = {
        onSuccess: (story: StoryInterface | null) => {
            queryClient.invalidateQueries(['stories']);
            if (story) {
                handleOnSuccess && handleOnSuccess(story.id);
            }
        },
    };
    return useMutation(mutationKey, mutationFn, options);
};

export const useStoryUpdateMutation = (
    id: string,
    handleOnSuccess?: () => void,
) => {
    const queryClient = useQueryClient();
    const mutationKey = ['story-update', id];
    const mutationFn = putStory(id);
    const options = {
        onSuccess: () => {
            queryClient.invalidateQueries(['stories']);
            queryClient.invalidateQueries(['story', { id }]);
            handleOnSuccess && handleOnSuccess();
        },
    };
    return useMutation(mutationKey, mutationFn, options);
};

export const useStoryDeleteMutation = (
    id: string,
    handleOnSuccess?: () => void,
) => {
    const queryClient = useQueryClient();
    const mutationKey = ['story-delete', id];
    const mutationFn = deleteStory(id);
    const options = {
        onSuccess: () => {
            queryClient.invalidateQueries(['stories']);
            queryClient.invalidateQueries(['story', { id }]);
            handleOnSuccess && handleOnSuccess();
        },
    };
    return useMutation(mutationKey, mutationFn, options);
};
