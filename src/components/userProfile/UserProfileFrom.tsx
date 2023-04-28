import React, { FC } from 'react';
import { useUserInfoQuery } from '@api/authentication';
import { ProfilePicture } from '@components/userProfile/ProfilePicture';
import { BaseText } from '@UI';
import { View } from 'react-native';

export const UserProfileFrom: FC = () => {
    const { data: user } = useUserInfoQuery();
    return (
        <View>
            <ProfilePicture uri={user?.profilePicture} />
            <BaseText>Profile</BaseText>
            <BaseText>{user?.email}</BaseText>
            <BaseText>{user?.firstName}</BaseText>
            <BaseText>{user?.lastName}</BaseText>
        </View>
    );
};
