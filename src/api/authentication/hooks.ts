import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getUserInfo, login, updateUserInfo } from '@api/authentication';
import { useAppDispatch } from '@store';
import { setUser } from '@store/userSlice/userSlice';
import { UserInterface } from '@types';

export const useUserInfoQuery = () => {
    const dispatch = useAppDispatch();
    const queryFn = () => getUserInfo();
    const queryKey = ['me'];
    const options = {
        retry: false,
        onSuccess: (user: UserInterface) => {
            if (user) {
                dispatch(setUser(user));
            }
        },
    };
    return useQuery(queryKey, queryFn, options);
};

export const useUserInfoMutation = () => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();
    const mutationFn = updateUserInfo;
    const mutationKey = ['me-mutation'];
    const options = {
        retry: false,
        onSuccess: (user: UserInterface) => {
            queryClient.invalidateQueries(['me']);
            if (user) {
                dispatch(setUser(user));
            }
        },
    };
    return useMutation(mutationKey, mutationFn, options);
};

export const useLoginQuery = (email: string, password: string) => {
    const queryFn = () => login(email, password);
    const queryKey = ['login'];
    const options = {
        retry: false,
    };
    return useQuery(queryKey, queryFn, options);
};
