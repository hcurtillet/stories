import React, { FC, useEffect } from 'react';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import storage from '@react-native-firebase/storage';

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
}) => {
    const [urls, setUrls] = React.useState<string[]>([]);
    useEffect(() => {
        const promises = imageUrls.map(async url => {
            const uri = await storage().ref(url).getDownloadURL();
            return uri;
        });
        Promise.all(promises).then(urls => {
            setUrls(urls);
        });
    }, [imageUrls]);

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            supportedOrientations={['portrait', 'landscape']}>
            <ImageViewer
                imageUrls={urls.map(url => ({ url }))}
                enableSwipeDown={true}
                index={activeIndex}
                renderIndicator={() => <></>}
                onSwipeDown={() => setIsVisible(false)}
            />
        </Modal>
    );
};
