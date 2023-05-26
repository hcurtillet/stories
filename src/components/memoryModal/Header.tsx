import { useNavigation } from '@react-navigation/native';
import { FC, useEffect } from 'react';

export const Header: FC = () => {
    const navigation = useNavigation();
    useEffect(
        () =>
            navigation.setOptions({
                headerShown: false,
            }),
        [navigation],
    );
    return null;
};
