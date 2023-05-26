import React, { FC } from 'react';
import { BaseText } from '@UI';
import { Trans } from 'react-i18next';
import styled from 'styled-components/native';

interface ComponentProps {
    titleKey: string;
}

export const HeaderTitle: FC<ComponentProps> = ({ titleKey }) => (
    <Container>
        <BaseText>
            <Trans i18nKey={titleKey} />
        </BaseText>
    </Container>
);

const Container = styled.View({
    flexDirection: 'row',
    alignItems: 'space-between',
    alignSelf: 'center',
});
