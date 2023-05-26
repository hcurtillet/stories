import React, { FC } from 'react';
import { Image } from '@UI/image';
import styled from 'styled-components/native';

interface ComponentProps {
    thumbnails: string[];
}

const transformProperties = [
    [{ rotate: `-${10}deg` }],
    [{ rotate: `${20}deg` }],
    [{ rotate: `-${30}deg` }],
    [{ rotate: `${10}deg` }],
];

export const Images: FC<ComponentProps> = ({ thumbnails }) => (
    <Container>
        {thumbnails.length > 0 ? (
            thumbnails.map((item, index) => (
                <Image
                    uri={item}
                    style={{
                        width: '70%',
                        height: '70%',
                        borderRadius: 25,
                        zIndex: -index,
                        transform: transformProperties[index],
                        position: 'absolute',
                    }}
                />
            ))
        ) : (
            <Image
                uri={''}
                style={{
                    width: '70%',
                    height: '70%',
                    borderRadius: 25,
                    transform: transformProperties[0],
                    position: 'absolute',
                }}
            />
        )}
    </Container>
);

const Container = styled.View({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
});
