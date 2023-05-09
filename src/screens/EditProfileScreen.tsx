import React, { FC } from 'react';
import { ScreenContainer } from '@UI/screenContainer';
import { Header, UserForm } from '@components/editUserProfile';

export const EditProfileScreen: FC = () => (
    <ScreenContainer>
        <Header />
        <UserForm />
    </ScreenContainer>
);
