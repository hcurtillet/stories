import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

export const GoBackButton: FC = () => {
    const navigation = useNavigation();
    return (
        <Container onPress={() => navigation.goBack()}>
            <Icon name={'angle-left'} size={30} color={colors.blue} />
        </Container>
    );
};

const Container = styled.TouchableOpacity({
    padding: 10,
});
