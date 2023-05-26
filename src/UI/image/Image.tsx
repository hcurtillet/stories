import React, { FC, useEffect } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { userPlaceholder } from '@constants';
import storage from '@react-native-firebase/storage';
import { ImageRequireSource } from 'react-native';

interface ComponentProps {
    uri: string | null | undefined;
    resizeMode?: FastImageProps['resizeMode'];
    style?: any;
    defaultSource?: ImageRequireSource;
}

export const Image: FC<ComponentProps> = ({
    uri,
    style,
    resizeMode,
    defaultSource,
}) => {
    const [imageUri, setImageUri] = React.useState<string | null>(null);

    useEffect(() => {
        if (uri) {
            if (uri.startsWith('images/')) {
                storage()
                    .ref(uri)
                    .getDownloadURL()
                    .then(url => {
                        setImageUri(url);
                    });
            } else {
                setImageUri(uri);
            }
        }
    }, [uri]);

    return (
        <FastImage
            source={{ uri: imageUri || '' }}
            style={style}
            resizeMode={resizeMode ?? FastImage.resizeMode.cover}
            defaultSource={defaultSource ?? userPlaceholder}
        />
    );
};
