import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { colors } from '@styles';

type Props = {
    title: string | null;
    leftComponent?: () => React.ReactNode;
    rightComponent?: () => React.ReactNode;
};
export const Header = (props: Props) => {
    const { title, leftComponent, rightComponent } = props;
    return (
        <Container>
            <ContainerLeft>{leftComponent && leftComponent()}</ContainerLeft>
            <TitleText>{title}</TitleText>
            <ContainerRight>
                {rightComponent && rightComponent()}
            </ContainerRight>
        </Container>
    );
};

const Container = styled(View)`
    flex: 1;
    width: 100%;
    flex-direction: row;
    border-bottom: 3px solid ${colors.grey};
    align-items: center;
    justify-content: space-between;
`;

const TitleText = styled(Text)`
    font-size: 20px;
    font-weight: bold;
`;

const ContainerRight = styled(View)`
    width: 10%;
    self-align: flex-end;
`;

const ContainerLeft = styled(View)`
    width: 10%;
    self-align: flex-start;
`;
