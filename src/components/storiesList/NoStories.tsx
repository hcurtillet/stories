import React, { FC } from 'react';
import styled from 'styled-components/native';
import { BaseText, colors } from '@UI';
import { Trans } from 'react-i18next';

export const NoStories: FC = () => (
    <Container>
        <BaseText color={colors.grey}>
            <Trans i18nKey="stories.noStories" />
        </BaseText>
    </Container>
);

const Container = styled.View({
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
});
