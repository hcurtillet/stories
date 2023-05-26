import React, { FC } from 'react';
import { StoryInterface } from '@types';
import styled from 'styled-components/native';
import { BaseText, colors, TitleText } from '@UI';

export const StoryTexts: FC<Pick<StoryInterface, 'title' | 'description'>> = ({
    title,
    description,
}) => (
    <Container>
        <TitleText color={colors.white}>{title}</TitleText>
        <BaseText color={colors.white}>{description}</BaseText>
    </Container>
);

const Container = styled.View({
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    padding: '5%',
});
