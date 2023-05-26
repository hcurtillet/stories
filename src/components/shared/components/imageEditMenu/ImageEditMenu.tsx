import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ImageLibraryOptions,
    ImagePickerResponse,
    launchCamera,
    launchImageLibrary,
} from 'react-native-image-picker';
import { MenuView, NativeActionEvent } from '@react-native-menu/menu';
import { FormikHandlers } from 'formik';
import styled from 'styled-components/native';
import { colors } from '@UI';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ComponentProps {
    onChange: FormikHandlers['handleChange'];
}

const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 1,
};

export const ImageEditMenu: FC<ComponentProps> = ({ onChange }) => {
    const { t } = useTranslation();

    const imageCallback = (item: ImagePickerResponse) => {
        const { assets } = item;
        if (assets) {
            const { uri } = assets[0];
            uri && onChange(uri);
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
        <MenuContainer
            onPressAction={onPress}
            actions={[
                { id: '1', title: t('common.takePicture') },
                { id: '2', title: t('common.chooseFromLibrary') },
            ]}>
            <Icon name={'camera'} size={20} color={colors.white} />
        </MenuContainer>
    );
};

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
