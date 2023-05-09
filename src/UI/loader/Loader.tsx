import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '@UI';
import styled from 'styled-components/native';

export const Loader = () => (
    <Container>
        <ActivityIndicator size="large" color={colors.blue} />
    </Container>
);

const Container = styled.View({
    zIndex: 100,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
});
