import styled from 'styled-components/native';

interface ComponentProps {
    width?: string | number;
    height?: string | number;
    color: string;
}

export const Separator = styled.View<ComponentProps>(
    ({ width, height, color }) => ({
        width: width || '100%',
        height: height || 1,
        backgroundColor: color,
        alignSelf: 'center',
    }),
);
