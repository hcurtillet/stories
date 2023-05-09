import styled from 'styled-components/native';

interface ComponentProps {
    center?: boolean;
    style?: any;
}

export const BaseText = styled.Text<ComponentProps>(({ style, center }) => ({
    fontSize: 20,
    textAlign: center ? 'center' : 'left',
    ...(style && { style }),
}));
