import React, { FC } from 'react';
import { useAppSelector } from '@store';
import styled from 'styled-components/native';
import { Loader } from '@UI/loader';
import { NewPostFrom } from '@components/newPost/NewPostFrom';
import { AddImages } from '@components/newPost/AddImage';
import { ImagePreview } from '@components/newPost/imagePreview';

export const NewPost: FC = () => {
    const { isUploading } = useAppSelector(state => state.post);
    return (
        <Container>
            {isUploading && <Loader />}
            <NewPostFrom />
            <ImagePreview />
            <AddImages />
        </Container>
    );
};
const Container = styled.View({
    flex: 1,
    width: '100%',
    height: '100%',
});
