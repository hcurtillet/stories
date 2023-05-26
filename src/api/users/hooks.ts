import { getUserInfo, searchUsers } from '@api/users/queries';
import { useQuery } from 'react-query';

export const useSearchUsers = (searchInput: string) => {
    const queryKey = ['users', 'search', searchInput];
    const queryFn = searchUsers(searchInput);
    const options = {
        enabled: searchInput.length > 2,
    };
    return useQuery(queryKey, queryFn, options);
};

export const useUserInfoQuery = (id: string) => {
    const queryKey = ['users-info', id];
    const queryFn = getUserInfo(id);
    return useQuery(queryKey, queryFn);
};
