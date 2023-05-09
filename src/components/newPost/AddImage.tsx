import React, { FC } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import {
    ImagePickerResponse,
    launchCamera,
    CameraOptions,
} from 'react-native-image-picker';
import { useAppDispatch, useAppSelector } from '@store';
import { setMedias } from '@store/postSlice';

const options: CameraOptions = {
    mediaType: 'mixed',
    quality: 1,
};

export const AddImages: FC = () => {
    const images = useAppSelector(state => state.post.medias);
    const dispatch = useAppDispatch();
    const imageCallback = (item: ImagePickerResponse) => {
        const { assets } = item;
        if (assets) {
            dispatch(setMedias([...assets, ...images]));
        }
    };
    const handlePress = async () => {
        await launchCamera(options, imageCallback);
    };

    return (
        <Container onPress={handlePress}>
            <IconContainer>
                <Icon
                    name={'camera'}
                    color={colors.blue}
                    size={30}
                    style={{ alignSelf: 'center' }}
                />
            </IconContainer>
        </Container>
    );
};

const Container = styled.TouchableOpacity({
    width: '100%',
    height: 70,
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
});

const IconContainer = styled.View({
    width: 50,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.blue,
});
