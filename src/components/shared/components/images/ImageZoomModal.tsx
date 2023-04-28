import React, { FC } from 'react';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

interface ComponentProps {
    imageUrls: string[];
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    activeIndex: number;
}

export const ImageZoomModal: FC<ComponentProps> = ({
    imageUrls,
    isVisible,
    setIsVisible,
    activeIndex,
}) => (
    <Modal visible={isVisible} transparent={true}>
        <ImageViewer
            imageUrls={imageUrls.map(item => ({ url: item }))}
            enableSwipeDown={true}
            index={activeIndex}
            renderIndicator={() => <></>}
            onSwipeDown={() => setIsVisible(false)}
        />
    </Modal>
);
