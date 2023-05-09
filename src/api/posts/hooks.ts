import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPosts, postPost } from '@api/posts/queries';

export const usePostsQuery = (storyId: string) => {
    const queryKey = ['posts', { storyId }];
    const queryFn = getPosts(storyId);
    const options = {};
    return useQuery(queryKey, queryFn, options);
};

export const usePostCreateMutation = (
    storyId: string,
    handleOnSuccess?: () => void,
) => {
    const queryClient = useQueryClient();
    const mutationKey = ['post-create'];
    const mutationFn = postPost;
    const options = {
        onSuccess: () => {
            queryClient.invalidateQueries(['posts', { storyId }]);
            handleOnSuccess && handleOnSuccess();
        },
    };
    return useMutation(mutationKey, mutationFn, options);
};
