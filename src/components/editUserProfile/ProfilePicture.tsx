import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Image } from '@UI/image';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { FormikHandlers } from 'formik';
import { ImageEditMenu } from '@components/shared';

const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 1,
};

interface ComponentProps {
    uri: string | null;
    onChange: FormikHandlers['handleChange'];
}

export const ProfilePicture: FC<ComponentProps> = ({ uri, onChange }) => (
    <Container>
        <Image uri={uri} style={{ width: '100%', height: '100%' }} />
        <ImageEditMenu onChange={onChange} />
    </Container>
);

const Container = styled.View({
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
