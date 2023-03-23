import { getStories, getStory, postStory, putStory } from '@api/story';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useStoriesQuery = () => {
    const queryKey = ['stories'];
    const queryFn = getStories;
    const options = {};
    return useQuery(queryKey, queryFn, options);
};

export const useStoryQuery = (id: string) => {
    const queryKey = ['story', { id }];
    const queryFn = () => getStory(id);
    const options = {};
    return useQuery(queryKey, queryFn, options);
};

export const useStoryCreateMutation = (handleOnSuccess?: () => void) => {
    const queryClient = useQueryClient();
    const mutationKey = ['story-create'];
    const mutationFn = postStory();
    const options = {
        onSuccess: () => {
            queryClient.invalidateQueries(['stories']);
            handleOnSuccess && handleOnSuccess();
        },
    };
    return useMutation(mutationKey, mutationFn, options);
};

export const useStoryUpdateMutation = (
    id: string,
    handleOnSuccess?: () => void,
) => {
    const queryClient = useQueryClient();
    const mutationKey = ['story', id];
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
