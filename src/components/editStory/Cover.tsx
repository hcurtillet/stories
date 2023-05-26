import React, { FC } from 'react';
import { Image } from '@UI/image';
import styled from 'styled-components/native';
import { FormikHandlers } from 'formik';
import { ImageEditMenu } from '@components/shared';

interface ComponentProps {
    cover: string;
    onChange: FormikHandlers['handleChange'];
}
export const Cover: FC<ComponentProps> = ({ cover, onChange }) => (
    <Container>
        <Image
            uri={cover}
            style={{ width: '100%', height: '100%' }}
            resizeMode={'cover'}
        />
        <ImageEditMenu onChange={onChange} />
    </Container>
);

const Container = styled.View({
    width: '80%',
    aspectRatio: 3 / 2,
    borderRadius: 5,
    overflow: 'hidden',
    margin: '10%',
});
