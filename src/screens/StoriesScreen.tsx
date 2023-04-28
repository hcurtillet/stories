import React from 'react';
import { StoriesList, Header } from '@components/storiesList';
import { ScreenContainer } from '@UI/screenContainer';

export const StoriesScreen = () => (
    <ScreenContainer>
        <Header />
        <StoriesList />
    </ScreenContainer>
);
