import React, { FC } from 'react';
import { Asset } from 'react-native-image-picker';
import styled from 'styled-components/native';
import { colors } from '@UI';
import { Image } from 'react-native';

export const RenderImage: FC<Asset> = ({ uri }) => (
    <Container>
        <Image source={{ uri }} style={{ width: '100%', height: '100%' }} />
    </Container>
);

const Container = styled.View({
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    margin: '2%',
    borderRadius: 10,
    aspectRatio: '3 / 4',
    overflow: 'hidden',
});
