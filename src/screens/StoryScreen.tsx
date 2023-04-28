import React from 'react';
import { ScreenContainer } from '@UI/screenContainer';
import { Header, StoryFeed } from '@components/storyFeed';

export const StoryScreen = () => (
    <ScreenContainer>
        <Header />
        <StoryFeed />
    </ScreenContainer>
);
