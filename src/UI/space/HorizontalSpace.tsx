import styled from 'styled-components/native';

interface ComponentProps {
    size: number;
}

export const HorizontalSpace = styled.View<ComponentProps>(({ size }) => ({
    width: size,
}));
