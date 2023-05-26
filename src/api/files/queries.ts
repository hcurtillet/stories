import { Asset } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

export const uploadImage = async (item: Asset): Promise<string> => {
    try {
        const { fileName, uri } = item;
        if (!fileName || !uri) {
            return '';
        }
        if (!uri.startsWith('file://')) {
            return '';
        }
        const storageRef = storage().ref(
            `images/${new Date().toISOString()}-${fileName}`,
        );
        const result = await storageRef.putFile(uri);
        if (result.state !== 'success') {
            throw Error('Failed to upload');
        }
        const url = await storageRef.getDownloadURL();
        return url;
    } catch (e) {
        throw Error(e as string);
    }
};

export const uploadImages = async (items: Asset[]): Promise<string[]> => {
    try {
        const promises = items.map(item => uploadImage(item));
        const result = await Promise.all(promises);
        return result.filter(item => item !== '');
    } catch (e) {
        throw Error(e as string);
    }
};
