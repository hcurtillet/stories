import React, { FC } from 'react';
import styled from 'styled-components/native';
import { colors } from '@UI';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MenuView, NativeActionEvent } from '@react-native-menu/menu';
import { Image } from '@UI/image';
import { useTranslation } from 'react-i18next';
import {
    ImageLibraryOptions,
    ImagePickerResponse,
    launchCamera,
    launchImageLibrary,
} from 'react-native-image-picker';
import { FormikHandlers } from 'formik';

const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 1,
};

interface ComponentProps {
    uri: string | null;
    onChange: FormikHandlers['handleChange'];
}

export const ProfilePicture: FC<ComponentProps> = ({ uri, onChange }) => {
    const { t } = useTranslation();

    const imageCallback = (item: ImagePickerResponse) => {
        const { assets } = item;
        if (assets) {
            const { uri } = assets[0];
            uri && onChange('profilePicture')(uri);
        }
    };

    const onPress = ({ nativeEvent }: NativeActionEvent) => {
        const { event } = nativeEvent;
        if (event === '1') {
            launchCamera(options, imageCallback);
        }
        if (event === '2') {
            launchImageLibrary(options, imageCallback);
        }
    };
    return (
        <Container>
            <Image uri={uri} style={{ width: '100%', height: '100%' }} />
            <MenuContainer
                onPressAction={onPress}
                actions={[
                    { id: '1', title: t('profile.takePicture') },
                    { id: '2', title: t('profile.chooseFromLibrary') },
                ]}>
                <Icon name={'camera'} size={20} color={colors.white} />
            </MenuContainer>
        </Container>
    );
};

const Container = styled.TouchableOpacity({
    margin: 10,
    width: '60%',
    aspectRatio: 1,
    borderRadius: 100,
    justifySelf: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
});

const IconContainer = styled.View({
    // position: 'absolute',
    zIndex: 5,
    height: '30%',
    width: '100%',
    bottom: 0,
    right: 0,
    backgroundColor: colors.transparentGrey,
    alignItems: 'center',
    justifyContent: 'center',
});

const MenuContainer = styled(MenuView)({
    position: 'absolute',
    zIndex: 5,
    height: '30%',
    width: '100%',
    bottom: 0,
    right: 0,
    backgroundColor: colors.transparentGrey,
    alignItems: 'center',
    justifyContent: 'center',
});
