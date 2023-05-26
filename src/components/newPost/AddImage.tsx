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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const options: CameraOptions = {
    mediaType: 'mixed',
    quality: 1,
};

export const AddImages: FC = () => {
    const images = useAppSelector(state => state.post.medias);
    const dispatch = useAppDispatch();
    const { bottom } = useSafeAreaInsets();
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
        <Container bottom={bottom}>
            <IconContainer onPress={handlePress}>
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

const Container = styled.View<{ bottom: number }>(({ bottom }) => ({
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: bottom,
}));

const IconContainer = styled.TouchableOpacity({
    width: 75,
    height: 75,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.lightBlueButton,
});
