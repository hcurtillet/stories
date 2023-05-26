import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
    deletePost,
    getPost,
    getPosts,
    postComment,
    postPost,
} from './queries';

export const usePostsQuery = (storyId: string) => {
    const queryKey = ['posts', { storyId }];
    const queryFn = getPosts(storyId);
    const options = {};
    return useQuery(queryKey, queryFn, options);
};

export const usePostQuery = (id: string) => {
    const queryKey = ['post', { id }];
    const queryFn = getPost(id);
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

export const useCommentCreateMutation = (
    postId: string,
    handleOnSuccess?: () => void,
) => {
    const queryClient = useQueryClient();
    const mutationKey = ['comment-create'];
    const mutationFn = postComment(postId);
    const options = {
        onSuccess: () => {
            queryClient.invalidateQueries(['post', { id: postId }]);
            handleOnSuccess && handleOnSuccess();
        },
    };
    return useMutation(mutationKey, mutationFn, options);
};

export const useDeletePostMutation = (
    id: string,
    storyId: string,
    handleOnSuccess?: () => void,
) => {
    const queryClient = useQueryClient();
    const mutationKey = ['post-delete'];
    const mutationFn = deletePost(id);
    const options = {
        onSuccess: () => {
            queryClient.invalidateQueries(['posts', { storyId }]);
            handleOnSuccess && handleOnSuccess();
        },
    };
    return useMutation(mutationKey, mutationFn, options);
};
