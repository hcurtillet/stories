import styled from 'styled-components/native';
import { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from '@UI';

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
        // keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Container>{children}</Container>
    </KeyboardAvoidingView>
);

const Container = styled.View({
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
});
