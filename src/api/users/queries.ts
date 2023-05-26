import { UserInterface } from '@types';
import { client } from '@api/client';
import { formatToUser, UserDto } from '@api/shared';

export const searchUsers =
    (searchTerm: string) => async (): Promise<UserInterface[]> => {
        try {
            const { data } = await client.get<UserDto[]>(
                `users/search/${searchTerm.toLowerCase()}`,
            );
            return data.map(formatToUser);
        } catch (error) {
            throw error;
        }
    };

export const getUserInfo = (id: string) => async (): Promise<UserInterface> => {
    try {
        const { data } = await client.get<UserDto>(`users/${id}`);
        return formatToUser(data);
    } catch (error) {
        throw error;
    }
};
