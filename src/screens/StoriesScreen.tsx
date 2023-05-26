import React from 'react';
import { StoriesList, Header, NewStoryButton } from '@components/storiesList';
import { ScreenContainer } from '@UI/containers';

export const StoriesScreen = () => (
    <ScreenContainer>
        <Header />
        <StoriesList />
        <NewStoryButton />
    </ScreenContainer>
);
