import React, { FC } from 'react';
import {
    Text,
    TextInput as ReactTextInput,
    TextInputProps,
} from 'react-native';
import styled from 'styled-components/native';

import { colors } from '@UI';

interface ComponentProps extends TextInputProps {
    label?: string;
    flex?: boolean;
}
export const TextInput: FC<ComponentProps> = ({
    label,
    flex = false,
    multiline = false,
    ...props
}) => (
    <Container flexed={flex}>
        {label && <MyText>{label}</MyText>}
        <MyTextInput multiline={multiline} {...props} />
    </Container>
);

const Container = styled.View<{ flexed: boolean }>(({ flexed }) => ({
    ...(flexed && { flex: 1 }),
}));

const MyText = styled(Text)`
    color: ${colors.blue};
`;
const MyTextInput = styled(ReactTextInput)<{ multiline: boolean }>`
    border: 1px solid ${colors.blue};
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    height: ${props => (props.multiline ? '100px' : '40px')};
    margin-bottom: 5px;
    margin-top: 5px;
`;
