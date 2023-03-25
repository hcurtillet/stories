import styled from 'styled-components/native';

interface ComponentProps {
    style?: any;
}

export const BaseText = styled.Text<ComponentProps>(({ style }) => ({
    fontSize: 20,
    ...(style && { style }),
}));
