import React, { FC } from 'react';
import { Text } from 'react-native';
import { colors } from '@UI';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HorizontalSpace } from '@UI/space';
import styled from 'styled-components/native';

interface ComponentProps {
    onPress: () => void;
    title: string;
    icon?: string;
}
export const Button: FC<ComponentProps> = ({ onPress, icon, title }) => (
    <MyButton onPress={onPress}>
        <Text>{title}</Text>
        {icon && (
            <>
                <HorizontalSpace size={10} />
                <Icon name={icon} size={20} color={colors.black} />
            </>
        )}
    </MyButton>
);

const MyButton = styled.TouchableOpacity({
    backgroundColor: colors.blue,
    minWidth: 100,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
});
