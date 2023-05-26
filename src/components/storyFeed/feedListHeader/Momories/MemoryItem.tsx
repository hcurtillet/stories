import React, { FC } from 'react';
import { MemoryInterface, StoryTabNavigationProp } from '@types';
import styled from 'styled-components/native';
import { Image } from '@UI/image';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@components';
import { BoldText, colors } from '@UI';

interface ComponentProps extends Pick<MemoryInterface, 'medias'> {
    index: number;
}

export const MemoryItem: FC<ComponentProps> = ({ medias, index }) => {
    const navigation = useNavigation<StoryTabNavigationProp>();

    const onPress = () => {
        navigation.navigate(routes.memoryModal, { memoryIndex: index });
    };
    return (
        <Container onPress={onPress}>
            <Image
                style={{
                    width: '100%',
                    height: '100%',
                }}
                uri={medias[0]}
                resizeMode="cover"
            />
            <Overlay>
                <BoldText color={colors.white}>Memory</BoldText>
            </Overlay>
        </Container>
    );
};

const Container = styled.TouchableOpacity({
    width: 120,
    height: 180,
    borderRadius: 5,
    overflow: 'hidden',
    margin: 5,
});

const Overlay = styled.View({
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
});
