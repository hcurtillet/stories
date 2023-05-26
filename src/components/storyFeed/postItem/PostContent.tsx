import React, { FC } from 'react';
import { PostInterface } from '@types';
import { BaseText } from '@UI';
import styled from 'styled-components/native';

export const PostContent: FC<Pick<PostInterface, 'content'>> = ({
    content,
}) => (
    <Container>
        <BaseText>{content}</BaseText>
    </Container>
);

const Container = styled.View({
    width: '100%',
    bottomMargin: 30,
});
