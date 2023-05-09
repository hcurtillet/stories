import React, { FC } from 'react';
import { ScreenContainer } from '@UI/screenContainer';
import { Header, NewPost } from '@components/newPost';

export const NewPostScreen: FC = () => (
    <ScreenContainer>
        <Header />
        <NewPost />
    </ScreenContainer>
);
