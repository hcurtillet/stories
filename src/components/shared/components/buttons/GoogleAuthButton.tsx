import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Image } from '@UI/image';
import { googleLogo } from '@constants';
import { onGoogleButtonPress } from '@api/authentication';

export const GoogleAuthButton: FC = () => {
    const onPress = async () => {
        await onGoogleButtonPress();
    };
    return (
        <Container onPress={onPress}>
            <Image
                uri={''}
                defaultSource={googleLogo}
                style={{
                    width: 75,
                    height: 75,
                }}
            />
        </Container>
    );
};

const Container = styled.TouchableOpacity({
    width: 100,
    height: 100,
});
