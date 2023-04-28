import React from 'react';
import { ScreenContainer } from '@UI/screenContainer';
import { Header, UserProfile } from '@components/userProfile';

export const ProfileScreen = () => (
    <ScreenContainer>
        <Header />
        <UserProfile />
    </ScreenContainer>
);
