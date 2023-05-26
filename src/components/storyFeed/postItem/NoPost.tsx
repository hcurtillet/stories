import React, { FC } from 'react';
import styled from 'styled-components/native';
import { BaseText, colors } from '@UI';
import { Trans } from 'react-i18next';

export const NoPost: FC = () => (
    <Container>
        <BaseText color={colors.grey}>
            <Trans i18nKey="story.noPosts" />
        </BaseText>
    </Container>
);

const Container = styled.View({
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
});
