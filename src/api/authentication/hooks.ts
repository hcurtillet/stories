import { useMutation, useQuery } from 'react-query';
import { UserType } from '@types';
import { getUserInfo, login, updateUserInfo } from '@api/authentication';

export const useUserInfoQuery = () => {
    const queryFn = () => getUserInfo();
    const queryKey = ['me'];
    const options = {
        retry: false,
    };
    return useQuery(queryKey, queryFn, options);
};

export const useUserInfoMutation = (user: UserType) => {
    const mutationFn = () => updateUserInfo(user);
    const mutationKey = ['me'];
    const options = {
        retry: false,
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
