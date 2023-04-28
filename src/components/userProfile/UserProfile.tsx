import React, { FC } from 'react';
import styled from 'styled-components/native';
import { BaseText } from '@UI';
import { useUserInfoQuery } from '@api/authentication';
import { ProfilePicture } from '@components/userProfile/ProfilePicture';

export const UserProfile: FC = () => {
    const { data: user } = useUserInfoQuery();
    return (
        <Container>
            <ProfilePicture uri={user?.profilePicture} />
            <BaseText>Profile</BaseText>
            <BaseText>{user?.email}</BaseText>
            <BaseText>{user?.firstName}</BaseText>
            <BaseText>{user?.lastName}</BaseText>
        </Container>
    );
};

const Container = styled.View({});
