import React, { FC, useCallback } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ProfileTabNavigationProp, StoryTabParamList } from '@types';
import { logout as apiLogOut } from '@api/authentication';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import { routes } from '@components';

export const LogOutButton: FC = () => {
    const {
        params: { isMyProfile },
    } = useRoute<RouteProp<StoryTabParamList, routes.userProfile>>();
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
        <>
            {isMyProfile && (
                <TouchableOpacity onPress={handleLogout}>
                    <Icon name={'sign-out-alt'} size={30} color={colors.blue} />
                </TouchableOpacity>
            )}
        </>
    );
};
