import React, { FC } from 'react';
import styled from 'styled-components/native';
import { PostInterface } from '@types';
import { CommentItem } from '@components/postDetails/comments/CommentItem';

export const Comments: FC<Pick<PostInterface, 'comments'>> = ({ comments }) => (
    <Container>
        {comments.map(comment => (
            <CommentItem {...comment} />
        ))}
    </Container>
);

const Container = styled.View({
    width: '90%',
    flex: 1,
});
