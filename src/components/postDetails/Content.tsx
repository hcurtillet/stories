import React, { FC } from 'react';
import { PostInterface } from '@types';
import styled from 'styled-components/native';
import { BaseText } from '@UI';

export const Content: FC<Pick<PostInterface, 'content'>> = ({ content }) => (
    <Container>
        <BaseText>{content}</BaseText>
    </Container>
);

const Container = styled.View({
    width: '100%',
});
