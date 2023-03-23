import styled from 'styled-components/native';
import { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

interface ComponentProps {
    children: ReactNode;
}

export const ScreenContainer = ({ children }: ComponentProps) => (
    <KeyboardAvoidingView
        style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        enabled={true}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Container>{children}</Container>
    </KeyboardAvoidingView>
);

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
