import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Image } from '@UI/image';

interface ComponentProps {
    uri: string | null | undefined;
}

export const ProfilePicture: FC<ComponentProps> = ({ uri }) => (
    <Container>
        <Image uri={uri} style={{ width: '100%', height: '100%' }} />
    </Container>
);

const Container = styled.View({
    margin: 10,
    width: '40%',
    aspectRatio: 1,
    borderRadius: 100,
    justifySelf: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
});
