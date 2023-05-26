import React, { FC } from 'react';
import { ScreenContainer } from '@UI/containers';
import { Header, PostDetails } from '@components/postDetails';

export const PostDetailsScreen: FC = () => (
    <ScreenContainer>
        <Header />
        <PostDetails />
    </ScreenContainer>
);
