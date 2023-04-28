import React, { FC } from 'react';
import { PostInterface } from '@types';
import styled from 'styled-components/native';
import { PostHeader } from '@components/storyFeed/PostItem/PostHeader';
import { PostFooter } from '@components/storyFeed/PostItem/PostFooter';
import { ImageCarousel } from '@components/shared';
import { PostContent } from '@components/storyFeed/PostItem/PostContent';
import { VerticalSpace } from '@UI/space';

export const PostItem: FC<PostInterface> = ({
    author,
    content,
    createdAt,
    medias,
    comments,
}) => (
    <Container>
        <PostHeader author={author} createdAt={createdAt} />
        <VerticalSpace size={10} />
        <PostContent content={content} />
        <VerticalSpace size={10} />
        <ImageCarousel images={medias} />
        <VerticalSpace size={10} />
        <PostFooter comments={comments} />
    </Container>
);

const Container = styled.View({
    width: '90%',
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 15,
    marginBottom: 15,
});
