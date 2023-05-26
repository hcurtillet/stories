import React, { FC } from 'react';
import { ScreenContainer } from '@UI/containers';
import { Header, StoryForm } from '@components/editStory';

export const EditStoryScreen: FC = () => (
    <ScreenContainer>
        <Header />
        <StoryForm />
    </ScreenContainer>
);
