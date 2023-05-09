import React, { FC } from 'react';
import {
    ImageLibraryOptions,
    launchImageLibrary,
    ImagePickerResponse,
} from 'react-native-image-picker';
import styled from 'styled-components/native';
import { BaseText } from '@UI';

const options: ImageLibraryOptions = {
    mediaType: 'mixed',
    quality: 1,
};

export const ImagePicker: FC = () => {
    const imageCallback = (item: ImagePickerResponse) => {
        const { assets } = item;
        if (assets) {
            assets.forEach(value => {
                console.log(value);
            });
        }
    };
    const handleOpen = async () => {
        await launchImageLibrary(options, imageCallback);
    };

    return (
        <Container onPress={handleOpen}>
            <BaseText>Image picker</BaseText>
        </Container>
    );
};

const Container = styled.TouchableOpacity({});
