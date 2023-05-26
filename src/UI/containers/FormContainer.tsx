import { ReactNode } from 'react';
import styled from 'styled-components/native';

interface ComponentProps {
    children: ReactNode;
}

export const FormContainer = ({ children }: ComponentProps) => (
    <Container>{children}</Container>
);

const Container = styled.View({
    width: '80%',
    justifyContent: 'center',
});
