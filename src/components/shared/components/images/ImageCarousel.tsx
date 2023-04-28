import React, { FC, SetStateAction, useRef, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import { ImageZoomModal } from './ImageZoomModal';
import { Image } from '@UI/image';

interface ComponentProps {
    images: string[];
}

export const ImageCarousel: FC<ComponentProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const ref = useRef(null);

    const renderItem = ({ item }: { item: string }) => (
        <ImageContainer onPress={() => setModalVisible(true)}>
            <Image
                style={{
                    alignSelf: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: 25,
                }}
                uri={item}
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
                        sliderWidth={400}
                        itemWidth={358}
                        layout={'stack'}
                        layoutCardOffset={18}
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

const ImageContainer = styled.TouchableOpacity({
    flex: 1,
    width: '100%',
    aspectRatio: 1,
});
