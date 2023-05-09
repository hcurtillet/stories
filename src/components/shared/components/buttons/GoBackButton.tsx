import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import { useNavigation } from '@react-navigation/native';

export const GoBackButton: FC = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name={'angle-left'} size={30} color={colors.blue} />
        </TouchableOpacity>
    );
};
