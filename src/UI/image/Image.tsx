import React, { FC } from 'react';
import FastImage from 'react-native-fast-image';
import { userPlaceholder } from '@constants';

interface ComponentProps {
    uri: string | null | undefined;
    style?: any;
}

export const Image: FC<ComponentProps> = ({ uri, style }) => (
    <FastImage
        source={{ uri: uri || '' }}
        style={style}
        resizeMode={FastImage.resizeMode.cover}
        defaultSource={userPlaceholder}
    />
);
