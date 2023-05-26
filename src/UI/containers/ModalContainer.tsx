import React, { FC } from 'react';
import { ScreenContainer } from './ScreenContainer';
import styled from 'styled-components/native';

interface ComponentProps {
    children: React.ReactNode;
    backgroundColor?: string;
}

export const ModalContainer: FC<ComponentProps> = ({
    children,
    backgroundColor,
}) => (
    <Container backgroundColor={backgroundColor}>
        <ScreenContainer>{children}</ScreenContainer>
    </Container>
);

const Container = styled.SafeAreaView<{ backgroundColor?: string }>(
    ({ backgroundColor }) => ({
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: backgroundColor || 'black',
    }),
);
