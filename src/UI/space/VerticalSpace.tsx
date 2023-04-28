import styled from 'styled-components/native';

interface ComponentProps {
    size: number;
}

export const VerticalSpace = styled.View<ComponentProps>(({ size }) => ({
    height: size,
}));
