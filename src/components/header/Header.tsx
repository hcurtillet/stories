import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

type Props = {
    title: string | null;
};
export const Header = (props: Props) => {
    const { title } = props;
    return <TitleText>{title}</TitleText>;
};

const TitleText = styled(Text)`
    font-size: 20px;
    font-weight: bold;
`;
