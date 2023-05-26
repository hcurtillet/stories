import React, { FC } from 'react';
import { Asset } from 'react-native-image-picker';
import styled from 'styled-components/native';
import { RenderImage } from './RenderImage';
import { FlatList } from 'react-native';
import { ImagePicker } from './ImagePicker';
import { useAppSelector } from '@store';
export const ImagePreview: FC = () => {
    const medias = useAppSelector(state => state.post.medias);

    const renderImage = ({ item, index }: { item: Asset; index: number }) => {
        const { id } = item;
        if (id === '') {
            return <ImagePicker />;
        }
        return <RenderImage {...item} key={index} />;
    };

    return (
        <Container>
            <FlatList data={medias} renderItem={renderImage} numColumns={3} />
        </Container>
    );
};

const Container = styled.View({
    width: '90%',
    flex: 3,
});
