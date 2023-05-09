import React, { FC, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProfileTabNavigationProp } from '@types';
import { logout as apiLogOut } from '@api/authentication';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';

export const LogOutButton: FC = () => {
    const navigation = useNavigation<ProfileTabNavigationProp>();

    const handleLogout = useCallback(async () => {
        try {
            await apiLogOut();
            while (navigation.canGoBack()) {
                navigation.goBack();
            }
        } catch (e) {
            throw new Error(e as string);
        }
    }, [navigation]);

    return (
        <TouchableOpacity onPress={handleLogout}>
            <Icon name={'sign-out-alt'} size={30} color={colors.blue} />
        </TouchableOpacity>
    );
};
