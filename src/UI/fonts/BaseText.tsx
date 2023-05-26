import styled from 'styled-components/native';

interface ComponentProps {
    textAlign?:
        | 'start'
        | 'end'
        | 'left'
        | 'right'
        | 'center'
        | 'justify'
        | 'match-paren';
    color?: string;
    style?: any;
}

export const BaseText = styled.Text<ComponentProps>(
    ({ style, textAlign, color }) => ({
        fontFamily: 'SourceSansPro-Black',
        fontSize: 20,
        textAlign: textAlign || 'justify',
        color: color || 'black',
        ...(style && { style }),
    }),
);
