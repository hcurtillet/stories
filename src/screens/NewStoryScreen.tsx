import React, { FC } from 'react';
import { ScreenContainer } from '@UI/screenContainer';
import { Header, StoryForm } from '@components/newStory';

export const NewStoryScreen: FC = () => (
    <ScreenContainer>
        <Header />
        <StoryForm />
    </ScreenContainer>
);
