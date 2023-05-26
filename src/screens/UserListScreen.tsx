import React, { FC } from 'react';
import { ScreenContainer } from '@UI/containers';
import { Header } from '@components/userList';
import { UserList } from '@components/userList/UserList';

export const UserListScreen: FC = () => (
    <ScreenContainer>
        <Header />
        <UserList />
    </ScreenContainer>
);
