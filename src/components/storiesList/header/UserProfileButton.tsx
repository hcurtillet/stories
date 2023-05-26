import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StoryTabNavigationProp } from '@types';
import { routes } from '@components';
import { Image } from '@UI/image';
import { TouchableOpacity } from 'react-native';
import { useUserInfoQuery } from '@api/authentication';

export const UserProfileButton: FC = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const { data: user } = useUserInfoQuery();

    const { profilePicture, id } = user || {};

    const onPress = () => {
        id &&
            navigation.navigate(routes.userProfile, {
                id,
                isMyProfile: true,
            });
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                uri={profilePicture}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 25,
                }}
            />
        </TouchableOpacity>
    );
};
