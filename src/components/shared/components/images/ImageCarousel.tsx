import React, { FC, SetStateAction, useRef, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import { ImageZoomModal } from './ImageZoomModal';
import { Image } from '@UI/image';
import { colors } from '@UI';
import { Dimensions } from 'react-native';

interface ComponentProps {
    images: string[];
    isPreview: boolean;
}

export const ImageCarousel: FC<ComponentProps> = ({ images, isPreview }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const ref = useRef(null);

    const { width } = Dimensions.get('window');

    const renderItem = ({ item }: { item: string }) => (
        <ImageContainer
            isPreview={isPreview}
            onPress={() => setModalVisible(true)}>
            <Image
                style={{
                    alignSelf: 'center',
                    width: '100%',
                    height: '100%',
                }}
                uri={item}
                resizeMode="cover"
            />
        </ImageContainer>
    );

    return (
        <>
            {images?.length > 0 && (
                <Container>
                    <Carousel
                        ref={ref}
                        vertical={false}
                        data={images}
                        renderItem={renderItem}
                        onSnapToItem={(index: SetStateAction<number>) =>
                            setActiveIndex(index)
                        }
                        sliderWidth={isPreview ? 400 : width}
                        itemWidth={isPreview ? 350 : width}
                        layout={isPreview ? 'stack' : 'default'}
                        layoutCardOffset={isPreview ? 18 : 0}
                    />
                    <ImageZoomModal
                        imageUrls={images}
                        isVisible={modalVisible}
                        setIsVisible={setModalVisible}
                        activeIndex={activeIndex}
                    />
                </Container>
            )}
        </>
    );
};

const Container = styled.View({
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 10,
});

const ImageContainer = styled.TouchableOpacity<{ isPreview: boolean }>(
    ({ isPreview }) => ({
        flex: 1,
        width: '100%',
        backgroundColor: colors.lightGrey,
        borderRadius: isPreview ? 10 : 0,
        aspectRatio: 1,
        overflow: 'hidden',
    }),
);
