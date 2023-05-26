import React, { FC } from 'react';
import { MemoryInterface } from '@types';
import styled from 'styled-components/native';
import { BaseText, colors } from '@UI';
import { useDateFormat } from '@components/shared';

export const MemoryInfo: FC<Pick<MemoryInterface, 'postDate' | 'content'>> = ({
    postDate,
    content,
}) => (
    <Container>
        <BaseText color={colors.white}>{content}</BaseText>
        <BaseText textAlign={'right'} color={colors.white}>
            {useDateFormat(postDate, false)}
        </BaseText>
    </Container>
);

const Container = styled.View({
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.transparentGrey,
    padding: '10%',
});
