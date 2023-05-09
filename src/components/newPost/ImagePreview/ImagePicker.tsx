import React, { FC } from 'react';
import {
    ImageLibraryOptions,
    launchImageLibrary,
    ImagePickerResponse,
} from 'react-native-image-picker';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import { useAppDispatch, useAppSelector } from '@store';
import { setMedias } from '@store/postSlice';

const options: ImageLibraryOptions = {
    mediaType: 'mixed',
    quality: 1,
    selectionLimit: 0,
};

export const ImagePicker: FC = () => {
    const images = useAppSelector(state => state.post.medias);
    const dispatch = useAppDispatch();
    const imageCallback = (item: ImagePickerResponse) => {
        const { assets } = item;
        if (assets) {
            dispatch(setMedias([...assets, ...images]));
        }
    };
    const handleOpen = async () => {
        await launchImageLibrary(options, imageCallback);
    };

    return (
        <Container onPress={handleOpen}>
            <Icon name={'plus-circle'} color={colors.blue} size={30} />
        </Container>
    );
};

const Container = styled.TouchableOpacity({
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    margin: '2%',
    borderRadius: 10,
    aspectRatio: '3 / 4',
});
