import React, { FC } from 'react';
import { Text, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '@UI';

interface ComponentProps extends TextInputProps {
    label?: string | undefined;
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
const MyTextInput = styled.TextInput<{ multiline: boolean }>(
    ({ multiline }) => ({
        borderRadius: 5,
        padding: 10,
        color: colors.black,
        width: '100%',
        height: multiline ? 100 : 40,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: colors.lightBlue,
        placeholderTextColor: colors.blue,
    }),
);
